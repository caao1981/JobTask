import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <button
      onClick={(e) => {
        navigate(isLoggedIn ? "/home" : "/login");
      }}
    >
      {isLoggedIn ? "Dashboard" : "Get Started Now"}
    </button>
  );
};

export default LandingPage;
