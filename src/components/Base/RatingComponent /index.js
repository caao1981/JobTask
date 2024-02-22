import React, { useState } from "react";
import PropTypes from "prop-types";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { StyledRating } from "./style";

export default function RatingComponent({
  size,
  value,
  precision,
  readonly,
  onChange,
  ...otherProps
}) {
  return (
    <StyledRating
      size={size}
      precision={precision}
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      readOnly={readonly}
      icon={<StarRoundedIcon style={{ opacity: 1 }} fontSize="inherit" />}
      emptyIcon={<StarRoundedIcon style={{ opacity: 1 }} fontSize="inherit" />}
      {...otherProps}
    />
  );
}

RatingComponent.propTypes = {
  size: PropTypes.string,
  value: PropTypes.number.isRequired,
  readonly: PropTypes.bool,
  precision: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
RatingComponent.defaultProps = {
  size: "large",
  readonly: false,
  precision: 0.5,
};
