import React from "react";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";

const ChipComponent = ({
  label,
  clickable,
  onClick,
  bgColor,
  color,
  otherStyles,
  ...otherProps
}) => {
  return (
    <Chip
      sx={{
        borderRadius: "10px",
        backgroundColor: bgColor,
        color,
        fontWeight: 500,
        fontSize: "12px",
        textTransform: "capitalize",
        "& .MuiChip-label": {
          paddingLeft: 0,
          paddingRight: 0,
        },
        ...otherStyles,
      }}
      {...otherProps}
      label={label}
      clickable={clickable}
      onClick={onClick}
    />
  );
};

ChipComponent.propTypes = {
  bgColor: PropTypes.string,
  clickable: PropTypes.bool,
  color: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  otherStyles: PropTypes.any,
};
ChipComponent.defaultProps = {
  label: "",
  clickable: false,
  onClick: () => {},
  bgColor: "#ffffff",
  color: "#000000",
};

export default ChipComponent;
