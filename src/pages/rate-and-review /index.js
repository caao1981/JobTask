import React from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import RateAndReviewComponent from "./../../components/UseCase/RateAndReviewComponent/RateAndReviewComponent";

const RateAndReview = () => {
  const location = useLocation();
  const mySearchParams = new URLSearchParams(location.search);
  const job_id = mySearchParams.get("job_id");
  console.log("HJELLASDKLJALSKD");
  return <RateAndReviewComponent job_id={job_id} />;
};

export default RateAndReview;
