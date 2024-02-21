import Checkbox from "@mui/material/Checkbox";
import { CustomCheckBox } from "./style";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
const CheckBoxComponent = ({
  onChangeCheckbox,
  rounded,
  label,
  ...otherProps
}) => {
  return (
    <CustomCheckBox
      onChange={onChangeCheckbox}
      control={<Checkbox />}
      checkedIcon={<CheckCircleRoundedIcon />}
      icon={<RadioButtonUncheckedRoundedIcon />}
      label={label}
      {...otherProps}
    />
  );
};

CheckBoxComponent.defaultProps = {
  rounded: true,
};

export default CheckBoxComponent;
