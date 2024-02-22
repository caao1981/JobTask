import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

export default function TypographyComponent({
  children,
  variant,
  component,
  ...otherProps
}) {
  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
}

TypographyComponent.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  component: PropTypes.string.isRequired,
};
TypographyComponent.defaultProps = {
  children: <></>,
  variant: "body",
};
