import React, { useState } from "react";
import StackComponent from "../../components/Base/StackComponent";
import useFormData from "./useFormData";
import MainForm from "./MainForm";
import WorkingHours from "./WorkingHours";
import ButtonComponent from "../../components/Base/ButtonComponent";
import { useMediaQuery } from "@mui/material";
import { useNotification, useResponsive } from "../../hooks";
import { addEditService } from "../../services";
import { ERROR, SUCCESS } from "../../config/constants";
import { useNavigate } from "react-router";

const NewService = () => {
  const { formData, updateFormData, handleSubmit, loading } = useFormData();
  const { isMediumScreen, isSmallScreen, isExtraSmallScreen } = useResponsive();

  return (
    <StackComponent direction="column" spacing={"1rem"}>
      <StackComponent
        sx={{
          "& > *": {
            width: "100%",
          },
        }}
        spacing="7rem"
        direction={
          isMediumScreen || isSmallScreen || isExtraSmallScreen
            ? "column"
            : "row"
        }
      >
        <MainForm {...{ formData, updateFormData }} />
        <WorkingHours {...{ formData, updateFormData }} />
      </StackComponent>
      <ButtonComponent
        disabled={loading}
        onClick={() => {
          handleSubmit();
        }}
        styleOverrides={{ alignSelf: "center" }}
      >
        Save
      </ButtonComponent>
    </StackComponent>
  );
};

export default NewService;
