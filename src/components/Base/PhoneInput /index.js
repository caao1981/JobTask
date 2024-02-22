import styled from "@emotion/styled";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const StyledPhoneInput = styled(PhoneInput)(({ theme }) => {
  return {
    backgroundColor: theme.palette.customColors.authBackground,
    height: "50px",
    // fontSize: "28px",
    borderRadius: "12px",

    "& .form-control": {
      borderColor: "#e3e3e3",
      border: "none !important",
      boxShadow: "0 0 0 0 !important",
      color: "#67758d",
      height: "100% !important",
      backgroundColor: "transparent !important",
      "&:-webkit-autofill": {
        "-webkit-text-fill-color": "#67758d !important",
        "-webkit-box-shadow": "0 0 0 30px white inset !important",
      },
    },

    "& .flag-dropdown": {
      border: "none !important",
      backgroundColor: `${theme.palette.customColors.authBackground} !important`,
      "& .arrow": {
        borderTop: `4px solid ${theme.palette.primary.main}`,
      },
    },

    "& .country-list": {
      fontSize: "15px",
    },
  };
});

const PhoneInputComponent = ({
  styleOverrides,
  value,
  onInputChange,
  disabled,
  ...otherProps
}) => {
  return (
    <>
      <StyledPhoneInput
        inputProps={{
          autoFocus: true,
        }}
        {...otherProps}
        style={{ ...styleOverrides }}
        country={"gb"}
        onlyCountries={["gb", "pk"]}
        value={value}
        onChange={(newVal) => onInputChange(`+${newVal}`)}
        disabled={disabled}
      />
    </>
  );
};

PhoneInputComponent.propTypes = {
  disabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

PhoneInputComponent.defaultProps = {
  disabled: false,
};

export default PhoneInputComponent;
