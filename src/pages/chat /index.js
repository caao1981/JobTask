import React, { useEffect, useState } from "react";
import ChatPageComponent from "./../../components/UseCase/ChatPageComponentNew/ChatPageComponent";
import { useNotification, useService } from "./../../hooks/";
import { getInbox } from "../../services";
import Loader from "../../routing/FallBackLoader";
import { socket } from "../../services/socket";
import { ERROR } from "../../config/constants";

const Chat = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const showNotification = useNotification();
  useEffect(() => {
    setLoading(true);
    getInbox()
      .then((res) => {
        if (res.error) {
          console.error(res);
          return showNotification("Something went wrong", ERROR);
        }
        console.log(res?.serviceResponse?.data?.data);
        setData(res?.serviceResponse?.data?.data);
      })
      .catch((err) => {
        console.error(err.message);
        return showNotification("Something went wrong", ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ChatPageComponent data={data} loading={loading} />
      )}
    </>
  );
};

export default Chat;
