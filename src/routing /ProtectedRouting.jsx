import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import MainLayout from "../components/ui/layouts/MainLayout";

const ProtectedRouting = ({ route }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // return isLoggedIn ? <MainLayout /> : <Navigate to="/login" />;
  return isLoggedIn ? <>{route}</> : <Navigate to="/login" />;
};

ProtectedRouting.defaultProps = {
  route: <div>No Route Provided</div>,
};

export default ProtectedRouting;
