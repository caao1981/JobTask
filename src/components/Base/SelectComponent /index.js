import PropTypes from "prop-types";
import { Select } from "@mui/material";
import StackComponent from "../StackComponent";
import TypographyComponent from "../TypographyComponent";
import MenuItemComponent from "../MenuItemComponent";
import TextFieldComponent from "../TextFieldComponent";
import { useEffect, useState } from "react";
import dropdownIcon from "./../../../assets/icons/common/DropDown.png";

const CustomIconComponent = (props) => {
  return (
    <img
      {...props}
      style={{ marginRight: "10px" }}
      alt="drop-down-icon"
      width="14px"
      height="10px"
      src={dropdownIcon}
    />
  );
};
export default function SelectComponent({
  value,
  defaultValue,
  onSelectionChange,
  children,
  label,
  options,
  height,
  required,
  withTextField,
  containerStyles,
  fullWidth,
  ...otherProps
}) {
  const controlled = value !== undefined;
  const [inputState, setInputState] = useState(
    controlled ? value : defaultValue
  );

  if (withTextField) {
    return (
      <StackComponent direction="column" sx={{ ...containerStyles }}>
        <TextFieldComponent
          select
          value={inputState}
          label={label}
          onInputChange={(e) => {
            setInputState(e);
            onSelectionChange(e);
          }}
          SelectProps={{
            IconComponent: CustomIconComponent,
          }}
        >
          {options.map((eachOption) => (
            <MenuItemComponent
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "left",
                alignItems: "center",
              }}
              key={eachOption.value}
              value={eachOption.value}
            >
              {eachOption.label}
            </MenuItemComponent>
          ))}
        </TextFieldComponent>
      </StackComponent>
    );
  }
