import React, { useState } from "react";
import LinkComponent from "../../Base/LinkComponent";
import TypographyComponent from "./../../Base/TypographyComponent";
import PhoneInputComponent from "../../Base/PhoneInput";
import AuthScreenWithLogo from "./../../Templates/AuthScreenWithLogo";
import { useNavigate } from "react-router";
import { useNotification } from "../../../hooks";
import {
  ERROR,
  OTPAllowedKey,
  SOURCE_LOGIN,
  SUCCESS,
  encryptionKey,
} from "../../../config/constants";
import { createSearchParams } from "react-router-dom";
import { encrypt } from "../../../utils/helpers";

const RedirectComponent = ({ redirect }) => {
  return (
    <TypographyComponent component="p">
      Dont have account?
      <LinkComponent
        to="/register"
        {...(redirect ? { ...redirect } : undefined)}
      >
        Register Now
      </LinkComponent>
    </TypographyComponent>
  );
};

const LoginComponent = ({ loginAction, formDataFromService }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showNotification } = useNotification();

  const [phoneInput, setPhoneInput] = useState("");
  const sendOtpHandler = () => {
    setLoading(true);
    loginAction(phoneInput)
      .then((res) => {
        if (!res.error) {
          showNotification(
            "OTP sent to the provided phone phone, please check",
            SUCCESS
          );

          navigate({
            pathname: "/otp",
            search: createSearchParams({
              source: SOURCE_LOGIN,
              phone: phoneInput,
            }).toString(),
          });
        } else {
          showNotification("Something went wrong!", ERROR);
        }
      })
      .catch((err) => {
        showNotification(err.message, ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthScreenWithLogo
      formActionLabel="Send OTP"
      redirectAction={<RedirectComponent redirect={formDataFromService} />}
      heading="Login with Phone Number"
      formSubmitAction={sendOtpHandler}
      submissionDisabled={phoneInput.length < 5 || loading}
    >
      <PhoneInputComponent
        styleOverrides={{ marginBottom: "70px", marginTop: "30px" }}
        value={phoneInput}
        onInputChange={(e) => setPhoneInput(e)}
      />
    </AuthScreenWithLogo>
  );
};

export default LoginComponent;
