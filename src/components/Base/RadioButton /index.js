import Radio from "@mui/material/Radio";
import PropTypes from "prop-types";
import TypographyComponent from "../TypographyComponent";
import BoxComponent from "../BoxComponent";
import { relative_width_font_size_generator } from "utils/helpers";

export default function RadioButtons({
  selectedValue,
  handleValueChange,
  label,
  ...otherProps
}) {
  const handleChange = (event) => {
    // setSelectedValue(event.target.value);
    handleValueChange(event);
  };

  return (
    <BoxComponent sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Radio
        checked={selectedValue}
        id={label}
        onChange={handleChange}
        {...otherProps}
      />
      <TypographyComponent
        htmlFor={label}
        variant="RadioIcon"
        sx={{
          whiteSpace: "noWrap",
          fontSize: relative_width_font_size_generator(18),
          color: "#333333",
          cursor: "pointer",
        }}
        component="label"
      >
        {label}
      </TypographyComponent>
    </BoxComponent>
  );
}
RadioButtons.propTypes = {
  selectedValue: PropTypes.string,
  label: PropTypes.string,
  handleValueChange: PropTypes.func,
};
RadioButtons.defaultProps = {
  selectedValue: true,
  label: "Label",
  handleValueChange: () => {},
};
