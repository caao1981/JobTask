import React, { useEffect, useState } from "react";
import MyServicesComponent from "../../components/UseCase/MyServicesComponent/MyServicesComponent";
import { useNotification, useService } from "../../hooks";
import { getAllServices } from "../../services";
import { ERROR } from "../../config/constants";

const MyServices = () => {
  const [servicesArr, setServicesArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { showNotification } = useNotification();
  const getServices = () => {
    setLoading(true);
    getAllServices()
      .then((res) => {
        if (res.error) {
          console.error(res);
          showNotification("Some error occured", ERROR);
          return setError(true);
        }

        setServicesArr(res?.serviceResponse?.data?.data?.services);
      })
      .catch((err) => {
        console.error(err.message);
        showNotification("Some error occured", ERROR);
        return setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getServices();
  }, []);
  return (
    <>
      {error ? (
        <>Error Occured, Please try again later...</>
      ) : (
        <MyServicesComponent
          services={servicesArr}
          loading={loading}
          resetApi={() => getServices()}
        />
      )}
    </>
  );
};

export default MyServices;
