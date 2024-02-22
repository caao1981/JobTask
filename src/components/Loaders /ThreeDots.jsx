import React from "react";
import { useTheme } from "@emotion/react";
import { ThreeDots } from "react-loader-spinner";

const ThreeDotsLoader = () => {
  const theme = useTheme();
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color={theme.palette.primary.main}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default ThreeDotsLoader;
