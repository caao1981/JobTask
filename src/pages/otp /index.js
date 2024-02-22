import React, { useEffect, useState } from "react";
import OtpScreenComponent from "../../components/UseCase/OtpScreenComponent/OtpScreenComponent";
import { useLocation, useNavigate } from "react-router";
import { useMutation } from "react-query";
import { login, register, verifyOtp } from "../../services";
import { useNotification } from "../../hooks";
import { ERROR, SOURCE_LOGIN, SOURCE_REGISTER } from "../../config/constants";
import { getMutation } from "../../utils/helpers";

const OtpScreen = () => {
  const navigate = useNavigate();
  const verifyOtpMutation = useMutation(verifyOtp);
  const loginMutation = useMutation(login);
  const location = useLocation();
  const mySearchParams = new URLSearchParams(location.search);
  const source = mySearchParams.get("source");
  const otpKey = mySearchParams.get("otpKey");
  const phone = mySearchParams.get("phone");
  const email = mySearchParams.get("email");
  const fullName = mySearchParams.get("fullName");
  const address = mySearchParams.get("address");
  const zipCode = mySearchParams.get("zipCode");
  const city = mySearchParams.get("city");
  const isAllowedEncrypted = mySearchParams.get("allowed");
  const [sourceState, setSourceState] = useState("");
  const { showNotification } = useNotification();
  const registrationMutation = useMutation(register);
  const navigateToHome = () => {
    showNotification(
      "Forbidden! Please request OTP at /login then continue to this page!",
      ERROR
    );
    return navigate("/");
  };
  useEffect(() => {
    if (source !== SOURCE_LOGIN && source !== SOURCE_REGISTER) {
      return navigateToHome("/");
    }

    setSourceState(source);
  }, []);

  const handleLoginWithPhoneNumber = async (otp) => {
    if (sourceState === SOURCE_LOGIN) {
      const response = await getMutation({ otp, phone }, verifyOtpMutation);
      if (response.error) {
        const resMessage = response?.serviceResponse?.response?.data?.response;
        console.error(resMessage);
        return showNotification(
          resMessage ? resMessage : "Error Occured",
          ERROR
        );
      }

      const loginResponse = await getMutation({ phone }, loginMutation);
      if (loginResponse.error) {
        const resMessage =
          loginResponse?.serviceResponse?.response?.data?.response;

        return showNotification(
          resMessage ? resMessage : "Error Occured",
          ERROR
        );
      }

      return loginResponse;
    }

    try {
      const response = await getMutation({ otp, phone }, verifyOtpMutation);

      if (response.error) {
        const resMessage = response?.serviceResponse?.data?.response;
        return showNotification(
          resMessage ? resMessage : "Error Occured",
          ERROR
        );
      }

      // get data from search params

      const registerPayload = {
        phone,
        email,
        fullName,
        address,
        zipCode,
        city,
        requestId: otpKey,
      };

      // call register mutation

      let registerResponse = await getMutation(
        registerPayload,
        registrationMutation
      );
      if (registerResponse.error) {
        const resMessage = registerResponse?.serviceResponse?.data?.response;
        return showNotification(
          resMessage ? resMessage : "Error Occured",
          ERROR
        );
      }

      let loginResponse = await getMutation({ phone }, loginMutation);
      if (loginResponse.error) {
        const resMessage = loginResponse?.serviceResponse?.data?.response;
        return showNotification(
          resMessage ? resMessage : "Error Occured",
          ERROR
        );
      }
      loginResponse.source = sourceState;
      return loginResponse;
    } catch (err) {
      console.error(err.message);
      showNotification("Error Occured", ERROR);
      return err;
    }
  };

  return (
    <OtpScreenComponent
      phone={phone}
      handleAction={handleLoginWithPhoneNumber}
    />
  );
};

export default OtpScreen;
