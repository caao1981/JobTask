import React, { useEffect, useState } from "react";
import StackComponent from "../../components/Base/StackComponent";
import Summary from "./Summary";
import Details from "./Details";
import { myEarnings } from "../../services";
import { useNotification } from "../../hooks";
import { ERROR } from "../../config/constants";

const MyEarnings = () => {
  const { showNotification } = useNotification();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getEarnings = () => {
    myEarnings()
      .then((res) => {
        setLoading(true);
        if (res.error) {
          console.error(res);
          setError(true);
          return showNotification("Something went wrong", ERROR);
        }
        setError(false);
        const dataToUpload = res.serviceResponse?.data?.data;
        setData(dataToUpload);
      })
      .catch((err) => {
        console.error(err.message);
        setError(true);
        return showNotification("Something went wrong", ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getEarnings();
  }, []);
  return (
    <StackComponent spacing="1rem">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {error ? (
            <>Something went wrong</>
          ) : (
            <>
              <Summary
                balance={data.balance}
                totalEarnings={data.totalEarnings}
                withdrawan={data.withdrawan}
              />
              <Details earningsArr={data.history} />
            </>
          )}
        </>
      )}
    </StackComponent>
  );
};

export default MyEarnings;
