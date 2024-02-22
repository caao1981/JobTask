import React from "react";
import GridComponent from "../../Base/GridComponent";
import FloatingActionButton from "../../Base/FloatingActionButton/";
import SingleService from "./SingleService";
import { useNavigate } from "react-router";

const MyServicesComponent = ({ resetApi, services, loading }) => {
  const navigate = useNavigate();
  return (
    <GridComponent container sx={{ overflowY: "auto", overflowX: "hidden" }}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {services.length > 0 ? (
            services.map((eachService, index) => (
              <GridComponent sx={{ p: "20px" }} key={eachService._id} xs={6}>
                <SingleService
                  serviceId={eachService._id}
                  eachService={eachService}
                  resetApi={resetApi}
                />
              </GridComponent>
            ))
          ) : (
            <>No Service Found! Please add a new service</>
          )}
          <FloatingActionButton
            handleClick={() => {
              navigate("/my-services/new");
            }}
          />
        </>
      )}
    </GridComponent>
  );
};

export default MyServicesComponent;
