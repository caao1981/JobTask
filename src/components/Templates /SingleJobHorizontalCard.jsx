import React from "react";
import CardComponent from "../Base/CardComponent";
import TypographyComponent from "../Base/TypographyComponent";
import StackComponent from "../Base/StackComponent";
import BoxComponent from "../Base/BoxComponent";
import ImageComponent from "../Base/ImageComponent";
import chatIcon from "./../../assets/icons/common/ChatIcon.png";
import { Button } from "@mui/material";
import { useCustomColors } from "../../hooks";
import { useNavigate } from "react-router";

const SingleJobHorizontalCard = ({
  name,
  status,
  date,
  isRated,
  job_id,
  ...otherProps
}) => {
  const navigate = useNavigate();
  const getCustomColors = useCustomColors();
  return (
    <CardComponent
      // onClick={(e) => {
      //   console.log("clicked");
      //   navigate(`/job-details/${job_id}`);
      // }}
      {...otherProps}
      styleOverrides={{
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TypographyComponent>{name}</TypographyComponent>
      <StackComponent sx={{ gap: "5px" }}>
        <TypographyComponent color="success.main">{status}</TypographyComponent>
        <TypographyComponent>{date}</TypographyComponent>
      </StackComponent>
      {isRated ? (
        <BoxComponent sx={{ width: "40px" }}>&nbsp;</BoxComponent>
      ) : (
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate(`/rate?job_id=${job_id}`);
          }}
          variant="contained"
          sx={{
            backgroundColor: getCustomColors("chatIconPrimaryLight"),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            minWidth: "40px",
            padding: 0,
            borderRadius: "10px",
            boxShadow: "none",
          }}
        >
          <ImageComponent source={chatIcon} width="24px" height="24px" />
        </Button>
      )}
    </CardComponent>
  );
};

SingleJobHorizontalCard.defaultProps = {
  name: "Irene Foks",
  status: "Completed",
  date: "10 January 2022",
  isRated: true,
  job_id: 0,
};

export default SingleJobHorizontalCard;
