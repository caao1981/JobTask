import PropTypes from "prop-types";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function GridComponent({ children, ...otherProps }) {
  return <Grid2 {...otherProps}>{children}</Grid2>;
}

GridComponent.propTypes = {
  children: PropTypes.node,
};
GridComponent.defaultProps = {
  children: <></>,
};
