import React from "react";
import TypographyComponent from "../../Base/TypographyComponent";

const LabelComponent = ({ children, ...otherProps }) => {
  return (
    <TypographyComponent
      sx={{ textTransform: "capitalize" }}
      variant="labelText"
      component="label"
      {...otherProps}
    >
      {children}
    </TypographyComponent>
  );
};

export default LabelComponent;
