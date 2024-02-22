import { useTheme } from "@emotion/react";

const useCustomColors = () => {
  const theme = useTheme();
  const getColorFromTheme = (colorName) => {
    return theme.palette.customColors[colorName];
  };
  return getColorFromTheme;
};

export default useCustomColors;
