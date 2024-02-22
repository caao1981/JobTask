import { useState } from "react";

import { buildPayloadObj } from "./helpers";
import { useNotification } from "../../hooks";
import { addEditService } from "../../services";
import { ERROR, SUCCESS } from "../../config/constants";
import { useNavigate } from "react-router";

export const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const initialState = (serviceType) => ({
  selectedServiceType: serviceType,
  lutonVansAvailable: 2,
  numberOfMenAvailable: 2,
  typeOfCleaning: [],
  provideFurnitureAndDismantling: true,
  workingHours: {
    monday: {
      value: false,
      startTime: "04:00",
      endTime: "21:00",
    },
    tuesday: {
      value: false,
      startTime: "04:00",
      endTime: "16:00",
    },
    wednesday: {
      value: false,
      startTime: "04:00",
      endTime: "16:00",
    },
    thursday: {
      value: false,
      startTime: "04:00",
      endTime: "16:00",
    },
    friday: {
      value: false,
      startTime: "04:00",
      endTime: "16:00",
    },
    saturday: {
      value: false,
      startTime: "04:00",
      endTime: "16:00",
    },
    sunday: {
      value: false,
      startTime: "04:00",
      endTime: "16:00",
    },
  },
});

export default function useFormData() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState("cleaning"));
  const { showNotification } = useNotification();
  const handleUpdateWorkingHours = (day, times) => {
    const { start, end } = times;
    // setWorkingHours
    // find day

    const isDayValid = DAYS.includes(day);
    if (!isDayValid) {
      throw new Error("Invalid Day Provided.");
    }
    let temp = { ...formData };

    if (start) {
      temp.workingHours[day].startTime = start;
    }

    if (end) {
      temp.workingHours[day].endTime = end;
    }

    setFormData(temp);
  };

  const handleToggleAvailableDay = (day) => {
    // find day in the state
    // toggle the value in the day based on choice
    const isDayValid = DAYS.includes(day);
    if (!isDayValid) {
      throw new Error("Invalid Day Provided");
    }
    let temp = { ...formData };
    if (temp.workingHours[day]) {
      temp.workingHours[day].value = !temp.workingHours[day].value;
    }
     setFormData(temp);
  };

  const updateNumberOfMenAvailable = (num) =>
    setFormData((prevState) => ({ ...prevState, numberOfMenAvailable: num }));
  const updateLutonVansAvailable = (num) =>
    setFormData((prevState) => ({ ...prevState, lutonVansAvailable: num }));

  const handleSelectTypeOfCleaning = (name) => {
    // make copy of state
    let copy = { ...formData };
    // find name in the state
    const indexOfNameInTypes = copy.typeOfCleaning.findIndex(
      (eachBox) => eachBox === name
    );
    if (indexOfNameInTypes === -1) {
      // if name is not found, then add the name
      copy.typeOfCleaning.push(name);
    } else {
      // if name is found, then remove the name
      copy.typeOfCleaning.splice(indexOfNameInTypes, 1);
    }
    // update state
    setFormData(copy);
  };

  const handleChangeServiceType = (nameOfService) =>
    setFormData(initialState(nameOfService));

  const isDisabledNext = () => {
    // if (selectedServiceType === '') {
    //   return true;
    // }

    // if (lutonVansAvailable === null) {
    //   return true;
    // }

    // if (numberOfMenAvailable === null) {
    //   return true;
    // }
    // console.log('invalidValues', invalidValues);
    // const truthyDays = Object.entries.filter(
    //   eachDayPair => eachDayPair[1].value,
    // );
    // const invalidValues = truthyDays.filter(eachTruthyDayPair => {
    //   const startTime = eachTruthyDayPair[1].startTime;
    //   const endTime = eachTruthyDayPair[1].endTime;
    //   return startTime == '' || endTime == '';
    // });
    // if (invalidValues.length > 0) {
    //   console.log('invalidValues', invalidValues);
    //   return true;
    // }
    return false;
  };

  const handleProvideFurnitureAndDismantling = () =>
    setFormData((prevState) => ({
      ...prevState,
      provideFurnitureAndDismantling: !prevState.provideFurnitureAndDismantling,
    }));

  const handleSubmit = () => {
    const payloadObj = buildPayloadObj(formData);
    setLoading(true);
    addEditService(payloadObj)
      .then((res) => {
        if (res.error) {
          console.error(res);
          return showNotification("Something went Wrong", ERROR);
        }
        showNotification("Your services have been updated!", SUCCESS);
        navigate("/my-services", {
          replace: true,
        });
      })
      .catch((err) => {
        console.error(err.message);
        return showNotification("Something went Wrong", ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateFormData = (name, choice) => {
    switch (name) {
      case "provideFurnitureAndDismantling":
        handleProvideFurnitureAndDismantling();
        break;
      case "selectedServiceType":
        handleChangeServiceType(choice);
        break;
      case "typeOfCleaning":
        handleSelectTypeOfCleaning(choice);
        break;
      case "updateWorkingDay":
        handleToggleAvailableDay(choice);
         break;
      case "updateWorkingTime":
        const { day, payload } = choice;
        handleUpdateWorkingHours(day, payload);
        break;
      case "lutonVansAvailable":
        updateLutonVansAvailable(choice);
        break;
      case "numberOfMenAvailable":
        updateNumberOfMenAvailable(choice);
        break;
      default:
        break;
    }
  };

  return {
    formData,
    updateFormData,
    handleSubmit,
    loading,
  };
}
