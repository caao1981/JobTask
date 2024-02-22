import React from "react";
import { PENDING_JOB_LIST } from "../../../config/temp";
import GridComponent from "../../Base/GridComponent";
import SingleJob from "../../Templates/SingleJobCard";
import { useNotification } from "../../../hooks";
import { ERROR, SUCCESS } from "../../../config/constants";
import { acceptJobHandler, rejectJobHandler } from "../../../services";

const PendingJobsComponent = ({ variant, jobs, loading, updateJobHandler }) => {
  const { showNotification } = useNotification();
  return (
    <GridComponent container sx={{ overflowY: "auto", overflowX: "hidden" }}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {jobs.length === 0 ? (
            <>No Jobs Found!</>
          ) : (
            <>
              {jobs.map((eachJob, index) => (
                <GridComponent sx={{ p: "20px" }} key={index} xs={6}>
                  <SingleJob
                    actionHandler={(choice, payload) => {
                      const jobId = payload._id;
                      if (choice === "accept") {
                        acceptJobHandler(jobId)
                          .then((res) => {
                            if (res.error) {
                              console.error(res);
                              return showNotification(
                                "Something went wrong",
                                ERROR
                              );
                            }
                            showNotification(
                              "Job Updated Successfully!",
                              SUCCESS
                            );
                            updateJobHandler();
                          })
                          .catch((err) => {
                            console.error(err.message);
                            return showNotification("Something went wrong");
                          });
                      }
                      if (choice === "reject") {
                        rejectJobHandler(jobId)
                          .then((res) => {
                            if (res.error) {
                              console.error(res);
                              return showNotification(
                                "Something went wrong",
                                ERROR
                              );
                            }
                            showNotification(
                              "Job Updated Successfully!",
                              SUCCESS
                            );
                            updateJobHandler();
                          })
                          .catch((err) => {
                            console.error(err.message);
                            return showNotification(
                              "Something went wrong",
                              ERROR
                            );
                          });
                      }
                    }}
                    variant={variant}
                    job={eachJob}
                  />
                </GridComponent>
              ))}
            </>
          )}
        </>
      )}
    </GridComponent>
  );
};

export default PendingJobsComponent;
