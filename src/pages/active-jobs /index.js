import React from "react";
import ActiveJobsComponent from "../../components/UseCase/ActiveJobsComponent/ActiveJobsComponent";
import { useGetJobsByStatus } from "../../hooks";

const ActiveJobs = () => {
  const { jobs, loading } = useGetJobsByStatus("ACTIVE");
  return <ActiveJobsComponent variant="ACTIVE" loading={loading} jobs={jobs} />;
};

export default ActiveJobs;
