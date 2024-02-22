import { useEffect, useState } from "react";
import useNotification from "./useNotification";
import { getJobList } from "../services";
import { ERROR } from "../config/constants";

const useGetJobsByStatus = (status) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showNotification } = useNotification();

  const getJobs = () => {
    getJobList(status)
      .then((res) => {
        const { error } = res;
        if (error) {
          showNotification("Error while fetching jobs", ERROR);
        }

        const retrievedJobs = res?.serviceResponse?.data?.data;
        if (retrievedJobs) {
          setJobs(retrievedJobs);
        }
      })
      .catch((err) => {
        console.error(err.message);
        showNotification("Error while fetching jobs", ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getJobs();
  }, []);
  const resetJobs = () => {
    getJobs();
  };
  return {
    jobs,
    loading,
    resetJobs,
  };
};

export default useGetJobsByStatus;
