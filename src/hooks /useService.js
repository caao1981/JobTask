import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { ACCESS_TOKEN, ERROR } from "../config/constants";
import { useNotification } from "./";

const useService = (identifier, apiCall) => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const { data, isLoading, isError } = useQuery(
    [identifier, localStorage.getItem(ACCESS_TOKEN)],
    apiCall
  );

  if (!isLoading) {
    if (data.error) {
      // return will cause issues
      const message = "Error Occured!";
      showNotification(message, ERROR);
      dispatch(authActions.logout());

      return { data, isLoading, isError };
    }
  }

  return { data, isLoading, isError };
};

export default useService;
