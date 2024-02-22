import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function TimePickerComponent({
  defaultValue,
  getValue,
  disabled,
}) {
  const [value, setValue] = React.useState(dayjs(defaultValue));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        disabled={disabled}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          getValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}

TimePickerComponent.defaultProps = {
  getValue: (e) => {
    return;
  },
  defaultValue: dayjs("2022-04-17T15:30"),
};
