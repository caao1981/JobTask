import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import TypographyComponent from "../TypographyComponent";
import StackComponent from "../StackComponent";
import ImageComponent from "../ImageComponent";
import styled from "@emotion/styled";

const StyledIconComp = styled(ImageComponent)(({ theme }) => ({
  "& .lazy-load-image-loaded": {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
  },
}));

const TextFieldComponent = ({
  styleOverrides,
  value,
  onInputChange,
  iconSource,
  label,
  ...props
}) => {
  const theme = useTheme();
  return (
    <StackComponent direction="column" sx={{ gap: "8px" }}>
      {label || label === "" ? (
        <TypographyComponent
          sx={{ textTransform: "capitalize" }}
          variant="labelText"
          component="label"
        >
          {label}
        </TypographyComponent>
      ) : null}
      <TextField
        InputProps={{
          startAdornment: iconSource ? (
            <InputAdornment position="start">
              <StyledIconComp width="15px" height="15px" source={iconSource} />
            </InputAdornment>
          ) : null,
        }}
        sx={{
          ...styleOverrides,
          backgroundColor: theme.palette.customColors.authBackground,
          height: "50px",
          // fontSize: "28px",
          borderRadius: "12px",
          borderColor: "#e3e3e3",
          border: "none !important",
          boxShadow: "0 0 0 0 !important",
          color: "#67758d",
          // height: "100% !important",
          // backgroundColor: "transparent !important",
          "& input": {
            fontSize: "14px",
            fontWeight: 400,
          },
          "& fieldset": { border: "none" },
          "&:-webkit-autofill": {
            "-webkit-text-fill-color": "#67758d !important",
            "-webkit-box-shadow": "0 0 0 30px white inset !important",
          },
        }}
        {...props}
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </StackComponent>
  );
};

TextFieldComponent.propTypes = {
  icon: PropTypes.any,
  iconSource: PropTypes.any,
  label: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  styleOverrides: PropTypes.object,
  value: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  styleOverrides: {},
  label: "",
};

export default TextFieldComponent;
