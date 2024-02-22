import React from "react";
import LoginComponent from "../../components/UseCase/LoginComponent/LoginComponent";
import { getMutation } from "./../../utils/helpers";
import { useLocation } from "react-router";
import { sendOtp } from "../../services";
import { useMutation } from "react-query";

const Login = () => {
  const sendOtpMutation = useMutation(sendOtp);
  const location = useLocation();
  const mySearchParams = new URLSearchParams(location.search);
  const redirect = mySearchParams.get("redirect");

  let formDataFromService;
  if (redirect === "checkout") {
    formDataFromService = {
      ...location.state,
    };
  }

  const handleLoginWithPhoneNumber = async (phone) => {
    const response = await getMutation({ phone }, sendOtpMutation);
    return response;
  };

  return (
    <LoginComponent
      formDataFromService={formDataFromService}
      loginAction={handleLoginWithPhoneNumber}
    />
  );
};

export default Login;
