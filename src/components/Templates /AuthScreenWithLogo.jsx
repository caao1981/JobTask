import React, { useState } from "react";
import LinkComponent from "../Base/LinkComponent";
import StackComponent from "../Base/StackComponent";
import ImageComponent from "../Base/ImageComponent";
import logoImage from "./../../assets/images/common/logo.png";
import TypographyComponent from "./../Base/TypographyComponent";
import { useCustomColors } from "../../hooks";
import PhoneInputComponent from "../Base/PhoneInput";
import BoxComponent from "../Base/BoxComponent";
import ButtonComponent from "../Base/ButtonComponent";
import { useNavigate } from "react-router";

const LoginComponent = ({
  children,
  formActionLabel,
  redirectAction,
  heading,
  formSubmitAction,
  submissionDisabled,
}) => {
  const getCustomColor = useCustomColors();
  return (
    <BoxComponent
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        formSubmitAction();
      }}
      sx={{ mt: "150px" }}
    >
      <StackComponent
        direction="column"
        alignItems="center"
        sx={{ width: "319px", margin: "0 auto" }}
      >
        <ImageComponent
          containerStyles={{ mb: "80px" }}
          source={logoImage}
          width="250px"
          height="60px"
        />
        <TypographyComponent
          component="h2"
          sx={{
            textAlign: "center",
            color: getCustomColor("headingColor"),
          }}
          variant="authPageHeading"
        >
          {heading}
        </TypographyComponent>
        {children}
        <ButtonComponent
          disabled={submissionDisabled}
          type="submit"
          styleOverrides={{ mb: "20px" }}
          fullWidth
        >
          {formActionLabel}
        </ButtonComponent>
        {redirectAction ? <>{redirectAction}</> : null}
      </StackComponent>
    </BoxComponent>
  );
};
LoginComponent.defaultProps = {
  formSubmitAction: () => {
    return;
  },
  submissionDisabled: false,
};
export default LoginComponent;
