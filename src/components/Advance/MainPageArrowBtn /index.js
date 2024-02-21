import React from "react";
import IconButton from "./../../Base/IconButton";
const MainPageArrowBtn = ({ icon, ...props }) => {
  return (
    <IconButton
      sx={{
        background: "white",
        width: "50px",
        height: "50px",
        borderRadius: "8px",
      }}
      {...props}
    >
      {icon}
    </IconButton>
  );
};

export default MainPageArrowBtn;
