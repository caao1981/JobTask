import { Card } from "@mui/material";
import React from "react";

const CardComponent = ({ styleOverrides, children, ...otherProps }) => {
  return (
    <Card
      sx={{
        boxShadow: "10px 14px 54px 0px rgba(15, 13, 35, 0.07)",
        borderRadius: "10px",
        ...styleOverrides,
      }}
      {...otherProps}
    >
      {children}
    </Card>
  );
};

export default CardComponent;
