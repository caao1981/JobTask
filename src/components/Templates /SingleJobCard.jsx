import PropTypes from "prop-types";
import React from "react";
import StackComponent from "../Base/StackComponent";
import CardComponent from "../Base/CardComponent";
import TypographyComponent from "../Base/TypographyComponent";
import ImageComponent from "../Base/ImageComponent";
import ButtonComponent from "../Base/ButtonComponent";
import { useCustomColors } from "../../hooks";
import { formatDateNeatly } from "../../utils/helpers";

const ActionButtons = ({ variant, actionHandler }) => {
  switch (variant) {
    case "ACTIVE": {
      return (
        <ButtonComponent
          fullWidth
          onClick={(e) => {
            e.preventDefault();
            actionHandler("active");
          }}
        >
          View Details
        </ButtonComponent>
      );
    }
    case "PENDING": {
      return (
        <StackComponent justifyContent="flex-end" spacing="8px">
          <ButtonComponent
            onClick={(e) => {
              e.preventDefault();
              actionHandler("pending", "accept");
            }}
            sx={{ backgroundColor: "success.main" }}
          >
            Accept
          </ButtonComponent>
          <ButtonComponent
            onClick={(e) => {
              e.preventDefault();
              actionHandler("pending", "reject");
            }}
            sx={{ backgroundColor: "error.main" }}
          >
            Reject
          </ButtonComponent>
        </StackComponent>
      );
    }
    default: {
      return <></>;
    }
  }
};

const SingleJob = ({ job, variant, actionHandler }) => {
  const getCustomColors = useCustomColors();
  console.log({ job });
  return (
    <CardComponent styleOverrides={{ p: "20px" }}>
      <StackComponent direction="column">
        <StackComponent direction="row" alignItems="center">
          <StackComponent sx={{ flexGrow: 1 }} direction="column">
            <TypographyComponent
              sx={{ mb: "5px" }}
              variant="cardHeading"
              component="h3"
            >
              {job?.user?.fullName}
            </TypographyComponent>
            <TypographyComponent
              sx={{
                mb: "5px",
                color: "primary.main",
                textTransform: "capitalize",
              }}
              variant="labelText"
              component="body"
            >
              {job?.name.split("-").join(" ")}
            </TypographyComponent>
            <TypographyComponent component="p" sx={{ mb: "15px" }}>
              {formatDateNeatly(job?.serviceDetails?.bookingDateTime)}
            </TypographyComponent>
          </StackComponent>
          <ImageComponent source={job.img} width="45px" height="auto" />
        </StackComponent>
        <TypographyComponent
          variant="body"
          sx={{ fontWeight: 700 }}
          component="h5"
          color="primary.main"
        >
          {job.service}
        </TypographyComponent>
        <TypographyComponent
          sx={{
            color: getCustomColors("lightText"),
            mb: "8px",
          }}
          component="p"
        >
          {job.description}
        </TypographyComponent>
        <ActionButtons
          actionHandler={(_, choice) => actionHandler(choice, job)}
          variant={variant}
        />
      </StackComponent>
    </CardComponent>
  );
};

SingleJob.defaultProps = {
  actionHandler: () => {
    return;
  },
};

SingleJob.propTypes = {
  job: PropTypes.shape({
    date: PropTypes.any,
    description: PropTypes.any,
    img: PropTypes.any,
    service: PropTypes.any,
    time: PropTypes.any,
    username: PropTypes.any,
  }).isRequired,
  variant: PropTypes.string.isRequired,
};

export default SingleJob;
