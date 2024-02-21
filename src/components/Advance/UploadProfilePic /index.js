import React from "react";
import uploadImageIcons from "./../../../assets/icons/profile/uploadimage.svg";
import BoxComponent from "../../Base/BoxComponent";

const UploadProfilePic = ({
  profileImg,
  uploadImageAction,
  containerStyles,
  loading,
}) => {
  return (
    <>
      <BoxComponent
        sx={{
          position: "relative",
          backgroundColor: "rgba(196, 196, 196, 1)",
          width: "120px",
          height: "120px",
          borderRadius: "30px",
          overflow: "hidden",
          ...containerStyles,
        }}
      >
        {loading ? (
          <>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              Uploading...
            </div>
          </>
        ) : (
          <>
            {profileImg ? (
              <img
                alt="user-profile"
                width="100%"
                height="100%"
                // style={{
                // position: "absolute",
                // top: "0",
                // right: "0",
                // bottom: 0,
                // left: 0,
                // }}
                src={profileImg}
              />
            ) : null}
          </>
        )}

        <img
          alt="profile-upload-icon"
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            background: "white",
            borderRadius: "50%",
            width: "40px",
            cursor: "pointer",
          }}
          src={uploadImageIcons}
        />
        <input
          style={{
            position: "absolute",
            opacity: "0",
            top: "0",
            right: "0",
            width: "153px",
            height: "153px",
            cursor: "pointer",
          }}
          type="file"
          onChange={(e) => {
            uploadImageAction(e.target.files[0]);
          }}
        />
      </BoxComponent>
    </>
  );
};

UploadProfilePic.defaultProps = {
  uploadImageAction: (e) => {
    return;
  },
};

export default UploadProfilePic;
