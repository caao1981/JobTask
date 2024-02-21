import PropTypes from "prop-types";
import styled from "@emotion/styled";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

const StyledInputField = styled("input")(({ theme }) => ({
  height: "100%",
  flexGrow: 1,
  borderRadius: "12px",
  border: "none",
  backgroundColor: theme?.palette?.customColors?.authBackground,
  "&:focus": {
    outline: `1px solid ${theme.palette.primary.light}`,
  },
}));

export default function OtpInputComponent({
  digits,
  containerStyleOverrides,
  inputStyleOverrides,
  value,
  onInputChange,
  ...otherProps
}) {
  return (
    <OtpInput
      {...otherProps}
      containerStyle={{
        gap: "9px",
        height: "63px",
        width: "100%",
        ...containerStyleOverrides,
      }}
      value={value}
      onChange={onInputChange}
      numInputs={digits}
      shouldAutoFocus
      renderSeparator={" "}
      renderInput={(props) => (
        <StyledInputField style={{ ...inputStyleOverrides }} {...props} />
      )}
    />
  );
}

OtpInputComponent.propTypes = {
  containerStyleOverrides: PropTypes.any,
  digits: PropTypes.number,

  inputStyleOverrides: PropTypes.any,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

OtpInputComponent.defaultProps = {
  digits: 6,
};
