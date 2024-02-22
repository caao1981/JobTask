import React from "react";
import CompletedJobsComponent from "../../components/UseCase/CompletedJobsComponent/CompletedJobsComponent";
import { useGetJobsByStatus } from "../../hooks";

const CompletedJobs = () => {
  const { jobs, loading } = useGetJobsByStatus("COMPLETED");
  return (
    <CompletedJobsComponent variant="COMPLETED" jobs={jobs} loading={loading} />
  );
};

export default CompletedJobs;
