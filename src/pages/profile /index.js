import React, { useEffect, useState } from "react";
import StackComponent from "../../components/Base/StackComponent";
import UploadProfilePic from "../../components/Advance/UploadProfilePic";
import TextFieldComponent from "../../components/Base/TextFieldComponent";
import MultiLineTextAreaComponent from "../../components/Base/MultiLineTextAreaComponent";
import ButtonComponent from "../../components/Base/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { uploadProfileData, uploadProfilePicture } from "../../services";
import { getMutation } from "../../utils/helpers";
import { useNotification } from "./../../hooks/";
import { ERROR, SUCCESS } from "../../config/constants";
import UpdateFormItem from "./UpdateFormItem";
import { userActions } from "../../store/user";
import { useNavigate } from "react-router";

const Profile = () => {
  const [changed, setChanged] = useState(false);
  const [loadingProfilePicUpdate, setLoadingProfilePicUpdate] = useState(false);
  const [savingData, setSavingData] = useState(false);
  const userData = useSelector((state) => state.user);
  const updateProfilePicMutation = useMutation(uploadProfilePicture);
  const updateProfileDetailsMutation = useMutation(uploadProfileData);
  const { showNotification } = useNotification();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setProfilePic(userData.profilePic);
  //   setFormData({
  //     name: userData.fullName,
  //     contactNumber: userData.phone,
  //     email: userData.email,
  //     location: userData.city,
  //   });
  // }, [userData]);
  const navigate = useNavigate();
  const uploadProfilePicHandler = (imageFile) => {
    setLoadingProfilePicUpdate(true);

    // Create a FileReader
    const reader = new FileReader();

    // Set up an event listener for when the FileReader has finished reading the file
    reader.onload = (event) => {
      const base64Image = event.target.result;

      // Now you can use the base64Image in your mutation
      getMutation({ image: base64Image }, updateProfilePicMutation)
        .then((res) => {
          if (res.error) {
            const errMessage = res.serviceResponse?.response?.data?.response;
            showNotification(errMessage ? errMessage : "ERROR OCCURRED", ERROR);
          } else {
            showNotification("Profile picture updated!", SUCCESS);

            dispatch(
              userActions.updateProfilePicture({
                profilePic: res?.serviceResponse?.data?.data?.url,
              })
            );
          }
        })
        .catch((err) => {
          showNotification("An error occurred", ERROR);
        })
        .finally(() => {
          setLoadingProfilePicUpdate(false);
        });
    };

    // Start reading the file as a base64 encoded string
    reader.readAsDataURL(imageFile);
  };

  const changeValueHandler = (key, updatedText) => {
    let temp = { ...userData };
    if (temp[key] !== updatedText) {
      setChanged(true);
    }
    temp = {
      ...temp,
      [key]: updatedText,
    };
    dispatch(userActions.updateUserInfo(temp));
  };

  return (
    <StackComponent direction="column" spacing="20px">
      <UploadProfilePic
        loading={loadingProfilePicUpdate}
        profileImg={userData.profilePic ? userData.profilePic : null}
        uploadImageAction={(e) => {
          uploadProfilePicHandler(e);
        }}
        containerStyles={{
          alignSelf: "center",
        }}
      />
      <StackComponent
        sx={{
           width: "100%",
          "& > *": {
            width: "100%",
          },
        }}
        spacing="33px"
      >
        <UpdateFormItem
          updateTextToState={(updatedText) => {
            changeValueHandler("fullName", updatedText);
          }}
          value={userData.fullName}
          label="Name"
        />
        <UpdateFormItem
          editingDisabled
          value={userData.phone}
          label="Contact Number"
        />
      </StackComponent>
      <StackComponent
        sx={{
          width: "100%",
          "& > *": {
            width: "100%",
          },
        }}
        spacing="33px"
      >
        <UpdateFormItem
          updateTextToState={(updatedText) => {
            changeValueHandler("email", updatedText);
          }}
          value={userData.email}
          label="Email"
        />
        <UpdateFormItem
          updateTextToState={(updatedText) => {
            changeValueHandler("city", updatedText);
          }}
          value={userData.city}
          label="Location"
        />
      </StackComponent>
      {/* <MultiLineTextAreaComponent rows={3} label="Description" /> */}
      <StackComponent spacing="1rem" justifyContent="flex-end">
        <ButtonComponent
          onClick={(e) => {
            e.preventDefault();
            navigate("/my-earnings");
          }}
          variant="outlined"
          styleOverrides={{ width: "327px" }}
        >
          My Earnings
        </ButtonComponent>
        <ButtonComponent
          onClick={(e) => {
            e.preventDefault();
            setSavingData(true);
            getMutation(
              {
                name: userData.fullName,
                contactNumber: userData.phone,
                email: userData.email,
                location: userData.city,
              },
              updateProfileDetailsMutation
            )
              .then((res) => {
                if (res.error) {
                  const errMessage =
                    res.serviceResponse?.response?.data?.response;
                  showNotification(
                    errMessage ? errMessage : "ERROR OCCURRED",
                    ERROR
                  );
                } else {
                  showNotification("Profile Details Updated!", SUCCESS);
                  const updatedProfileData = res?.serviceResponse?.data?.data;
                  dispatch(userActions.updateUserInfo(updatedProfileData));
                  setChanged(false);
                }
              })
              .catch((err) => {
                showNotification("An error occurred", ERROR);
              })
              .finally(() => {
                setLoadingProfilePicUpdate(false);
                setSavingData(false);
              });
          }}
          disabled={!changed || savingData}
          styleOverrides={{ width: "327px" }}
        >
          Save
        </ButtonComponent>
      </StackComponent>
    </StackComponent>
  );
};

export default Profile;
