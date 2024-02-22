import React, { useState } from "react";
import TypographyComponent from "../Base/TypographyComponent";
import StackComponent from "../Base/StackComponent";
import ChipComponent from "../Base/ChipComponent";
import { useCustomColors, useNotification } from "../../hooks";
import DividerComponent from "../Base/DividerComponent";
import GridComponent from "../Base/GridComponent";
import ImageComponent from "../Base/ImageComponent";
import ButtonComponent from "../Base/ButtonComponent";
import { useNavigate } from "react-router";
import { useTheme } from "@emotion/react";
import { ERROR, SUCCESS } from "../../config/constants";
import { formatDateNeatly } from "../../utils/helpers";
import { completeAJob } from "../../services";

const JobDetailsComponent = ({ variant, status, job_info }) => {
  const getCustomColors = useCustomColors();
  // in use effect, add logic to redirect to /home if job is not found in API call because of lack of security
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  return (
    <StackComponent spacing="25px" direction="column">
      <StackComponent direction="row" alignItems="center">
        <StackComponent direction="column" sx={{ flexGrow: 1 }}>
          <TypographyComponent
            sx={{ textTransform: "capitalize" }}
            variant="cardHeading"
            component="h1"
          >
            {job_info.name.split("-").join(" ")}
          </TypographyComponent>
          {/* <TypographyComponent
            variant="boldText"
            color="primary.main"
            component="h2"
          >
            {job_info.type}
          </TypographyComponent> */}
        </StackComponent>
        <ChipComponent
          bgColor={
            status === "ACTIVE"
              ? getCustomColors("statusActive")
              : status === "COMPLETED"
              ? theme.palette.success.main
              : null
          }
          label={status}
          color="#ffffff"
          otherStyles={{ width: "85px" }}
        />
      </StackComponent>
      <DividerComponent />
      {/* <GridComponent container>
        {Object.entries(job_info).map(([key, value], index) => (
          <GridComponent key={index} xs={6}>
            <StackComponent
              sx={{ width: "80%", float: index % 2 === 0 ? "left" : "right" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <TypographyComponent
                sx={{ textTransform: "capitalize", fontWeight: 500 }}
                color="primary.main"
              >
                {key.split("_").join(" ")}
              </TypographyComponent>
              <TypographyComponent>{value}</TypographyComponent>
            </StackComponent>
          </GridComponent>
        ))}
      </GridComponent> */}
      {/* <DividerComponent />
      <TypographyComponent component="h6" variant="body" color="primary.main">
        Description
      </TypographyComponent>
      <TypographyComponent
        color={getCustomColors("lightText")}
        component="h6"
        variant="body"
      >
        {job_info.description}
      </TypographyComponent> */}
      {/* <DividerComponent /> */}
      <StackComponent direction="row">
        <ImageComponent
          containerStyles={{ marginRight: "10px" }}
          source={job_info.user?.profilePic}
          width="40px"
          height="40px"
        />
        <StackComponent sx={{ flexGrow: 1 }} direction="column">
          <TypographyComponent sx={{ fontWeight: 500 }}>
            {job_info.user.fullName}
          </TypographyComponent>
          <TypographyComponent>
            {formatDateNeatly(job_info?.serviceDetails?.bookingDateTime)}
          </TypographyComponent>
        </StackComponent>

        {status === "ACTIVE" ? (
          <ButtonComponent
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
              completeAJob(job_info._id)
                .then((res) => {
                  if (res.error) {
                    console.error(res);
                    return showNotification("Error Occured!", ERROR);
                  }

                  showNotification("Job Completed!", SUCCESS);
                  navigate(`/rate?job_id=${job_info._id}`);
                })
                .catch((err) => {
                  console.error(err.message);
                  return showNotification("Error Occured!", ERROR);
                })
                .finally(() => {
                  setLoading(false);
                });
            }}
            color="success"
            disabled={loading}
            styleOverrides={{ color: "#ffffff", width: "287px" }}
          >
            Mark as Completed
          </ButtonComponent>
        ) : status === "COMPLETED" ? (
          <>
            {/* <ButtonComponent
              onClick={(e) => {
                e.preventDefault();
                navigate(`/earning-report/${job_info.job_id}`);
              }}
              styleOverrides={{ color: "#ffffff", width: "287px" }}
            >
              Com
            </ButtonComponent> */}
          </>
        ) : null}
      </StackComponent>
    </StackComponent>
  );
};

export default JobDetailsComponent;
