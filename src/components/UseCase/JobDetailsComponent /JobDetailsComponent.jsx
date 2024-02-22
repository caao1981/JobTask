import React from "react";
import { DUMMY_ACTIVE_JOB_DETAIL } from "../../../config/temp";
import JobDetailsTemplate from "./../../Templates/JobDetailsTemplate";

const JobDetailsComponent = ({
  variant,
  name,
  _id,
  status,
  user,
  serviceDetails,
  ...otherProps
}) => {
  // in use effect, add logic to redirect to home if job is not found in API call because of lack of security

  return (
    <JobDetailsTemplate
      status={status}
      job_info={{
        user,
        name,
        _id,
        serviceDetails,
      }}
    />
  );
};

export default JobDetailsComponent;
