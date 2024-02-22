import React from "react";
import TextFieldComponent from "../TextFieldComponent";
import TypographyComponent from "../TypographyComponent";
import StackComponent from "../StackComponent";

const MultiLineTextAreaComponent = ({
  label,
  value,
  onChange,
  rows,
  containerStyles,
  variant,
  ...otherProps
}) => {
  return (
    <StackComponent direction="column" sx={{ gap: "9px", ...containerStyles }}>
      {label ? (
        <TypographyComponent variant="cardHeading" component="label">
          {label}
        </TypographyComponent>
      ) : null}
      <TextFieldComponent
        {...otherProps}
        value={value}
        onInputChange={onChange}
        id="filled-multiline-static"
        multiline
        rows={rows}
        sx={{
          "& .MuiInputBase-root": {
            padding: "8px 12px",
          },
        }}
        defaultValue="Default Value"
        variant={variant}
      />
    </StackComponent>
  );
};

MultiLineTextAreaComponent.defaultProps = {
  rows: 5,
  variant: "filled",
};

export default MultiLineTextAreaComponent;
