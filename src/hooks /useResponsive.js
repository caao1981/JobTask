import React from "react";
import { useMediaQuery } from "@mui/material";
import { MEDIA } from "../config/media-limits";

const useResponsive = () => {
  const isMediumScreen = useMediaQuery(MEDIA.MD);
  const isSmallScreen = useMediaQuery(MEDIA.SM);
  const isExtraSmallScreen = useMediaQuery(MEDIA.XS);
  return { isMediumScreen, isSmallScreen, isExtraSmallScreen };
};

export default useResponsive;
