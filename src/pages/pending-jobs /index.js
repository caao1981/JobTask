import React from "react";
import PendingJobsComponent from "../../components/UseCase/PendingJobsComponent/PendingJobsComponent";
import { useGetJobsByStatus, useNotification } from "../../hooks";
import { ERROR, SUCCESS } from "../../config/constants";

const PendingJobs = () => {
  const { showNotification } = useNotification();

  const { jobs, loading, resetJobs } = useGetJobsByStatus("PENDING");
  const updateJobHandler = () => {
    resetJobs();
  };
  return (
    <PendingJobsComponent
      updateJobHandler={updateJobHandler}
      variant="PENDING"
      loading={loading}
      jobs={jobs}
    />
  );
};

export default PendingJobs;
