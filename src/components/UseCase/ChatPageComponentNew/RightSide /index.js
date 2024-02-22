import React, { useEffect, useState } from "react";
import StackComponent from "../../../Base/StackComponent";
import UserInformation from "./UserInformation";
import ChatWindowComponent from "../../../Advance/ChatWindowComponent";
import BoxComponent from "../../../Base/BoxComponent";
import { getSingleChatHistory, sendMessage } from "../../../../services";
import { useMutation } from "react-query";
import { getMutation } from "../../../../utils/helpers";
import { socket } from "../../../../services/socket";
import { useNotification, useService } from "./../../../../hooks";
import { ERROR } from "../../../../config/constants";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const generateUniqueId = () => uuidv4();

const ChatScreenContainer = ({
  selectedConverationId,
  currentConversation,
  width,
}) => {
  const userId = useSelector((state) => state.user._id);
  const sendMessageMutation = useMutation(sendMessage);
  const [messageList, setMessageList] = useState([]);
  const { showNotification } = useNotification();
  const [loadingMessages, setLoadingMessages] = useState(false);

  const messageFailed = (fakeId) => {
    let temp = [...messageList];
    const sentMessagesWithFakeId = temp.filter((eachMessage) => {
      return eachMessage.fakeId;
    });
  };

  const handleOutgoingMessage = async (message) => {
    try {
      const res = await getMutation(
        {
          body: message.message,
          chatId: currentConversation.id,
          receiverId: currentConversation.otherPersonId,
        },
        sendMessageMutation
      );

      if (res.error) {
        messageFailed(message.fakeId);
      }
    } catch (err) {
      console.log(err);
      messageFailed(message.fakeId);
    }
  };

  const handleSendMessage = (messageBody) => {
    const fakeId = generateUniqueId();
    const payload = {
      messageId: undefined,
      from: userId,
      to: currentConversation.otherPersonId,
      type: "outgoing",
      message: messageBody,
      fakeId: fakeId,
    };

    setMessageList((prevMessages) => {
      return [...prevMessages, payload];
    });

    handleOutgoingMessage(payload);
  };

  const getChatMessages = () => {
    getSingleChatHistory({ chatId: currentConversation.id })
      .then((res) => {
        if (res.error) {
          return showNotification(
            res?.serviceResponse?.response?.data?.msg,
            ERROR
          );
        }

        const conversationDetails = res?.serviceResponse?.data?.data;

        const tempMessages = conversationDetails.messages.map((eachMessage) => {
          return {
            messageId: eachMessage._id,
            sender: eachMessage.sentBy.sentById,
            type: eachMessage.sentBy.role === "owner" ? "outgoing" : "incoming",
            message: eachMessage.message,
          };
        });
        setMessageList(tempMessages);
      })
      .catch((err) => {
        showNotification(err.message, ERROR);
      })
      .finally(() => {
        setLoadingMessages(false);
      });
  };

  const realtimeMessageHandler = () => {
    const socketInstanse = socket("token");
    socketInstanse.on("connect", () => {
      console.log("connected");
    });
    socketInstanse.on("connect_error", (err) => {
      console.log(err.message); // prints the message associated with the error
    });

    socketInstanse.on("new-message", (data) => {
      if (
        data.chatId === currentConversation.id
        //  &&
        // data.sender === currentConversation.otherPersonId
      ) {
        if (data.sender !== userId) {
          const payload = {
            messageId: undefined,
            from: data.sender,
            to: userId,
            type: data.sender === userId ? "outgoing" : "incoming",
            message: data.message,
          };
          setMessageList((prevMessages) => {
            return [...prevMessages, payload];
          });
        }
      }
    });

    socketInstanse.on("new-user-connected", (data) => {
      console.log("new users", data);
    });
    socketInstanse.on("user-disconnected", (data) => {
      // alert(data.disconnected_user_id);
      console.log("user disconnected ", data);
    });

    return socketInstanse;
  };

  useEffect(() => {
    setLoadingMessages(true);
    getChatMessages();
  }, [currentConversation.id]);

  useEffect(() => {
    const socket = realtimeMessageHandler();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <StackComponent
      sx={{
        width,
      }}
      direction="column"
    >
      {selectedConverationId && selectedConverationId !== "" ? (
        <>
          <UserInformation data={currentConversation} />
          {loadingMessages ? (
            <div style={{ padding: "10px" }}>Loading Chat...</div>
          ) : (
            <>
              {currentConversation ? (
                <ChatWindowComponent
                  sendAction={handleSendMessage}
                  conversation={currentConversation}
                  messageList={messageList}
                />
              ) : null}
            </>
          )}
        </>
      ) : (
        <BoxComponent sx={{ m: "50px" }}>
          Please select a conversation to continue
        </BoxComponent>
      )}
    </StackComponent>
  );
};

export default ChatScreenContainer;
