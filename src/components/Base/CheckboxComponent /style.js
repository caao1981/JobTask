import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

const CustomCheckBox = styled(FormControlLabel)({
  color: "var(--palette-secondary-main)",
  "& .MuiFormControlLabel-label": {
    fontWeight: 400,
    fontSize: "11.64px",
    color: "var(-- --mui-palette-info-main)",
  },
});

export { CustomCheckBox };
