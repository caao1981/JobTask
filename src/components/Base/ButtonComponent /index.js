import { Button } from "@mui/material";
import React from "react";

const ButtonComponent = ({
  height,
  variant,
  children,
  styleOverrides,
  width,
  fullWidth,
  ...props
}) => {
  return (
    <Button
      sx={{
        borderRadius: "10px",
        fontSize: "14px",
        textTransform: "capitalize",
        height: height,
        width: fullWidth ? "100%" : width,
        boxShadow: "none",
        ...styleOverrides,
      }}
      {...props}
      variant={variant}
    >
      {children}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  variant: "contained",
  height: "50px",
  children: <></>,
  styleOverrides: {},
  width: "327px",
  fullWidth: false,
};

export default ButtonComponent;
