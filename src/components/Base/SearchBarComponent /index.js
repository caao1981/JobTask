import PropTypes from "prop-types";
import React from "react";
import StackCompoent from "../StackCompoent";
// import TextFieldComponent from "../TextFieldComponent";
import BoxComponent from "../BoxComponent";
import ImageComponent from "../ImageComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import styled from "@emotion/styled";
import { getDesignSystem } from "theme/DesignToken";

const inputStyles = {
  ...getDesignSystem(400, 14, 16),
  fontFamily: "Poppins",
};

const InputField = styled("input")(({ theme }) => ({
  "&::placeholder": {
    ...inputStyles,
    color: "#C8C8C8",
  },
  ...inputStyles,
  color: "#000000",
}));

const SearchBarComponent = ({
  placeholder,
  value,
  onChange,
  inputStyleProps,
  containerStyleProps,
  width,
  fullWidth,
  ...props
}) => {
  return (
    <StackCompoent
      style={{ ...containerStyleProps }}
      alignItems="center"
      sx={{
        width: fullWidth ? "100%" : width,
        border: "1px solid rgba(190, 200, 212, 1)",
        borderRadius: "5px",
        backgroundColor: "#FFFFFF",
        padding: `${relative_height_size_generator(
          14
        )} ${relative_width_size_generator(16)}`,
      }}
    >
      <InputField
        {...props}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
        style={{
          border: "none",
          outline: "none",
          flexGrow: 1,
          ...inputStyleProps,
        }}
      />
      <BoxComponent>
        <ImageComponent
          width={relative_width_size_generator(16)}
          height={relative_width_size_generator(16)}
          source="/Common/search_icon.svg"
        />
      </BoxComponent>
    </StackCompoent>
  );
};

SearchBarComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};
SearchBarComponent.defaultProps = {
  placeholder: "hello",
  width: "8rem",
  fullWidth: false,
};
export default SearchBarComponent;
