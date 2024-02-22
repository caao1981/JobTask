import React from "react";
import StackComponent from "../../Base/StackComponent";
import SingleJobHorizontalCard from "../../Templates/SingleJobHorizontalCard";
import { formatDateNeatly } from "../../../utils/helpers";

const CompletedJobsComponent = ({ jobs, loading, variant }) => {
  console.log(jobs);
  return (
    <StackComponent direction="column" spacing="21px">
      <>
        {loading ? (
          <>Loading Jobs...</>
        ) : (
          <>
            {jobs.length > 0 ? (
              <>
                {jobs.map((eachJob) => (
                  <SingleJobHorizontalCard
                    name={eachJob.user?.fullName}
                    status={eachJob?.status}
                    date={formatDateNeatly(
                      eachJob?.serviceDetails?.bookingDateTime
                    )}
                    job_id={eachJob._id}
                    isRated={false}
                  />
                ))}
              </>
            ) : (
              <>No Jobs Found!</>
            )}
          </>
        )}
      </>
    </StackComponent>
  );
};

export default CompletedJobsComponent;
