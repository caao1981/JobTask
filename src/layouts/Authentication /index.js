import React from "react";
import companyImage from "./../../assets/images/login/Group 1778 (1).png";
import ImageComponent from "../../components/Base/ImageComponent";
import BoxComponent from "../../components/Base/BoxComponent";
import StackComponent from "../../components/Base/StackComponent";
import { useCustomColors } from "../../hooks";
import { mainStyles } from "./style";

const AuthLayout = ({ children }) => {
  const getCustomColors = useCustomColors();
  return (
    <StackComponent sx={mainStyles}>
      <BoxComponent sx={{ width: "448px" }}>{children}</BoxComponent>
      <StackComponent
        sx={{
          backgroundColor: getCustomColors("authBackground"),
          flexGrow: 1,
        }}
        justifyContent="center"
        alignItems="center"
      >
        <ImageComponent
          height="calc(100vh - 2 * 105px)"
          width="auto"
          source={companyImage}
          alt="Company Image"
        />
      </StackComponent>
    </StackComponent>
  );
};

export default AuthLayout;
