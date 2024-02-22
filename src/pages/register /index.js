import React from "react";
import RegisterComponent from "../../components/UseCase/RegisterComponent/RegisterComponent";
import { useLocation, useNavigate } from "react-router";
import { useNotification } from "../../hooks";
import { createSearchParams } from "react-router-dom";
import {
  ERROR,
  INFO,
  OTPAllowedKey,
  SOURCE_REGISTER,
} from "../../config/constants";
import { encrypt, getMutation } from "../../utils/helpers";
import { useMutation } from "react-query";
import { sendOtp } from "../../services";

const Register = () => {
  const location = useLocation();
  console.log({ location });
  const navigate = useNavigate();
  const sendOtpMutation = useMutation(sendOtp);
  const { showNotification } = useNotification();
  const mySearchParams = new URLSearchParams(location.search);
  const phone = mySearchParams.get("phone");

  const handleSendOtp = async (phone) => {
    const response = getMutation({ phone }, sendOtpMutation);
    return response;
  };

  const handleRegister = (formData) => {
    const key = encrypt(OTPAllowedKey + formData.phone);
    handleSendOtp(formData.phone)
      .then((res) => {
        if (!res.error) {
          showNotification("Please enter the OTP sent to your phone!", INFO);
          return navigate({
            pathname: "/otp",
            search: createSearchParams({
              otpKey: res?.serviceResponse?.data?.data,
              source: SOURCE_REGISTER,
              allowed: key,
              ...formData,
            }).toString(),
          });
        }

        showNotification("Some Error Occured!", ERROR);
      })
      .catch((err) => {
        showNotification(`Some Error Occured! ${err.message}`, ERROR);
      });
  };
  return (
    <RegisterComponent
      handleFormSubmission={handleRegister}
      defaultPhone={phone}
    />
  );
};

export default Register;
