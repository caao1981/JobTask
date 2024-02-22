import React from "react";
import StackComponent from "../../components/Base/StackComponent";
import SwitchComponent from "../../components/Base/SwitchComponent";
import TypographyComponent from "../../components/Base/TypographyComponent";
import { DAYS } from "./useFormData";
import TimePickerComponent from "../../components/Base/TimePickerComponent";
import BoxComponent from "../../components/Base/BoxComponent";
import { formatDateNeatly } from "../../utils/helpers";
import dayjs from "dayjs";

const WorkingHours = ({ formData, updateFormData }) => {
  return (
    <StackComponent direction="column" spacing="1.2rem">
      <TypographyComponent
        sx={{ textTransform: "capitalize" }}
        variant="cardHeading"
        component="label"
      >
        Set Your Working Hours
      </TypographyComponent>
      <StackComponent direction="column" spacing="1rem">
        {DAYS.map((day) => {
          return (
            <StackComponent
              alignItems="center"
              justifyContent="space-between"
              spacing="1rem"
            >
              <TypographyComponent
                sx={{
                  textTransform: "capitalize",
                  color: "primary.main",
                  fontWeight: 500,
                  width: "20%",
                }}
              >
                {day}
              </TypographyComponent>
              <BoxComponent sx={{ flexGrow: 1 }}>
                <SwitchComponent
                  onChange={(e) => updateFormData("updateWorkingDay", day)}
                  checked={formData.workingHours[day].value}
                />
              </BoxComponent>
              <BoxComponent sx={{ mr: 1 }}>
                <StackComponent spacing="1rem" alignItems="center">
                  <TimePickerComponent
                    defaultValue={dayjs("2022-04-17T09:00")}
                    disabled={!formData.workingHours[day].value}
                    getValue={(e) => {
                      const formattedTime = formatDateNeatly(e.toJSON()).split(
                        " | "
                      )[1];

                      updateFormData("updateWorkingTime", {
                        day,
                        payload: {
                          start: formattedTime,
                        },
                      });
                    }}
                  />
                  <TypographyComponent
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 400,
                    }}
                  >
                    to
                  </TypographyComponent>
                  <TimePickerComponent
                    defaultValue={dayjs("2022-04-17T21:00")}
                    disabled={!formData.workingHours[day].value}
                    getValue={(e) => {
                      const formattedTime = formatDateNeatly(e.toJSON()).split(
                        " | "
                      )[1];

                      console.log(formData.workingHours[day]);
                      updateFormData("updateWorkingTime", {
                        day,
                        payload: {
                          start: formattedTime,
                        },
                      });
                    }}
                  />
                </StackComponent>
              </BoxComponent>
            </StackComponent>
          );
        })}
      </StackComponent>
    </StackComponent>
  );
};

export default WorkingHours;
