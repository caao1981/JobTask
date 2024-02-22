import PropTypes from "prop-types";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioGroupComponent({
  options,
  IconComponent,
  groupLabel,
  direction,
  value,
  setValue,
  ...otherProps
}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl {...otherProps}>
      {groupLabel ? (
        <FormLabel id="demo-controlled-radio-buttons-group">
          {groupLabel}
        </FormLabel>
      ) : null}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ flexDirection: direction }}
      >
        {options.map(({ value, label }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={IconComponent}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

RadioGroupComponent.propTypes = {
  IconComponent: PropTypes.any,
  direction: PropTypes.string,
  groupLabel: PropTypes.any,
  label: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

RadioGroupComponent.defaultProps = {
  options: [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ],
  IconComponent: <Radio />,
  direction: "row",
};
