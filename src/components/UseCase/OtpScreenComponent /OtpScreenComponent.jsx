import React, { useState } from "react";
import LinkComponent from "../../Base/LinkComponent";
import TypographyComponent from "./../../Base/TypographyComponent";
import TextFieldComponent from "../../Base/TextFieldComponent";
import AuthScreenWithLogo from "./../../Templates/AuthScreenWithLogo";
import { useCustomColors, useNotification } from "../../../hooks";
import OtpInputComponent from "../../Advance/OtpInputComponent";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";
import { createSearchParams } from "react-router-dom";
import {
  ACCESS_TOKEN,
  ERROR,
  INFO,
  RESPONSE_USER_NOT_FOUND,
  SUCCESS,
} from "../../../config/constants";
import { userActions } from "../../../store/user";

const RedirectComponent = () => {
  return (
    <TypographyComponent component="p">
      Don`t have account?
      <LinkComponent to="/register"> Register Now</LinkComponent>
    </TypographyComponent>
  );
};

const OtpScreenComponent = ({ handleAction, phone }) => {
  const { showNotification } = useNotification();
  const [otp, setOtp] = useState("");
  const getCustomColor = useCustomColors();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const verifyOtpHandler = () => {
    handleAction(otp)
      .then((res) => {
        if (res.error) {
          const { serviceResponse } = res;
          if (
            serviceResponse?.response?.data?.response ===
            RESPONSE_USER_NOT_FOUND
          ) {
            showNotification("User Not Found! Please create a new ID", INFO);
            navigate({
              pathname: "/register",
              search: createSearchParams({
                phone: phone,
              }).toString(),
            });
          }
        } else {
          const { serviceResponse } = res;
          const userData = serviceResponse?.data?.data;
          const accessToken = serviceResponse?.data?.accessToken;
          if (userData && accessToken) {
            showNotification("Successfully logged in!", SUCCESS);
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            dispatch(userActions.updateUserInfo(userData));
            // if true handle login, if false, dont
            dispatch(authActions.login());
            navigate("/");
          } else {
            showNotification("Something went wrong!", ERROR);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
    // if true handle login, if false, dont
    // dispatch(authActions.login());
    // navigate("/home");
  };

  return (
    <AuthScreenWithLogo
      submissionDisabled={!otp || otp.length < 6}
      formSubmitAction={verifyOtpHandler}
      formData={{ otp }}
      formActionLabel="Send OTP"
      redirectAction={<RedirectComponent />}
      heading="Enter the 6 digit code we sent to your mobile number"
    >
      <TypographyComponent
        sx={{
          color: getCustomColor("subtitleTextLightGrey"),
          textAlign: "center",
          mt: "16px",
          mb: "34px",
        }}
        component="p"
        variant="authPageSubtitle"
      >
        We have sent a code to your mobile number, enter it below.
      </TypographyComponent>
      <OtpInputComponent
        value={otp}
        onInputChange={(e) => setOtp(e)}
        containerStyleOverrides={{ marginBottom: "70px" }}
      />
    </AuthScreenWithLogo>
  );
};

export default OtpScreenComponent;
