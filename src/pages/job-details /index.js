import React from "react";
import JobDetailsComponent from "./../../components/UseCase/JobDetailsComponent/JobDetailsComponent";
import { useLocation } from "react-router";

const JobDetails = () => {
  const location = useLocation();
  console.log(location.state);
  return <JobDetailsComponent {...location.state} />;
};

export default JobDetails;
