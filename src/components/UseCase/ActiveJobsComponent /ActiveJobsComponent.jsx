import React from "react";
import { ACTIVE_JOB_LIST } from "../../../config/temp";
import GridComponent from "../../Base/GridComponent";
import SingleJob from "./../../Templates/SingleJobCard";
import { useNavigate } from "react-router";

const ActiveJobsComponent = ({ variant, loading, jobs }) => {
  const navigate = useNavigate();

  return (
    <GridComponent container sx={{ overflowY: "auto", overflowX: "hidden" }}>
      {loading ? (
        <>Loading Jobs...</>
      ) : (
        <>
          {jobs.length > 0 ? (
            jobs.map((eachJob, index) => (
              <GridComponent sx={{ p: "20px" }} key={index} xs={6}>
                <SingleJob
                  actionHandler={(_, jobDetails) => {
                    navigate(`/job-details/${eachJob._id}`, {
                      state: { ...jobDetails, variant },
                    });
                  }}
                  variant="ACTIVE"
                  job={eachJob}
                />
              </GridComponent>
            ))
          ) : (
            <>No Jobs Found!</>
          )}
        </>
      )}
    </GridComponent>
  );
};

export default ActiveJobsComponent;
