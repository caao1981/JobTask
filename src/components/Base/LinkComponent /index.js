import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useCustomColors } from "../../../hooks";

export default function LinkComponent({
  children,
  linkStyle,
  to,
  ...otherProps
}) {
  const getCustomColors = useCustomColors();
  return (
    <Link
      {...otherProps}
      to={to}
      style={{
        textDecoration: "none",
        color: getCustomColors("linkColor"),
        fontWeight: 500,
        ...linkStyle,
      }}
    >
      {children}
    </Link>
  );
}

LinkComponent.propTypes = {
  children: PropTypes.node,
  linkStyle: PropTypes.object,
  to: PropTypes.string.isRequired,
};
LinkComponent.defaultProps = {
  children: <></>,
  linkStyle: {},
};
