import "react-chat-elements/dist/main.css";
import { MessageBox, Avatar } from "react-chat-elements";

import StackComponent from "../../Base/StackComponent";
import styled from "@emotion/styled";

import { useEffect, useRef } from "react";
import SendMessage from "./SendMessage";

const StyledMessageBox = styled(MessageBox)(({ theme }) => ({
  // marginBottom: "2rem",
  "& .rce-mbox": {
    backgroundColor: "#E7E6E6",
    boxShadow: "none",
    borderRadius: "8px",
    height: "40px",
  },
  "& .rce-mbox-left-notch": {
    display: "none",
  },
  "& .rce-mbox-right-notch": {
    display: "none",
  },
}));

const SenderMessageBox = styled(StyledMessageBox)(({ theme }) => ({
  "& .rce-mbox": {
    borderBottomLeftRadius: "0px",
    height: "auto",
    maxWidth: "400px",
  },
}));
const RecieverMessageBox = styled(StyledMessageBox)(({ theme }) => ({
  "& .rce-mbox": {
    maxWidth: "400px",
    height: "auto",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "8px !important",
    borderBottomRightRadius: "0px !important",
  },
}));

const SenderMessageBoxComp = ({ from, to, message, ...props }) => {
  return (
    <>
      <SenderMessageBox
        {...props}
        position={"left"}
        type={"text"}
        // title={"Message Box Title"}
        text={message}
      />
    </>
  );
};

const RecieverMessageBoxComp = ({ from, to, message, ...props }) => {
  return (
    <>
      <RecieverMessageBox
        {...props}
        position={"right"}
        type={"text"}
        // title={"Message Box Title"}
        text={message}
      />
    </>
  );
};

const ChatWindowComponent = ({ sendAction, conversation, messageList }) => {
  const ref = useRef(null);

  const scrollToLastElement = () => {
    const lastChildElement = ref.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToLastElement();
  }, [messageList]);

  return (
    <StackComponent
      direction="column"
      sx={{ height: "calc(100% - 150px)", padding: "40px", paddingBottom: 0 }}
    >
      <div ref={ref} style={{ flexGrow: 1, height: "100%", overflowY: "auto" }}>
        {[
          messageList.length > 0
            ? messageList.map((eachMessage) => {
                const { type } = eachMessage;

                const stackStyle =
                  type === "incoming"
                    ? {
                        flexDirection: "row",
                      }
                    : {
                        flexDirection: "row-reverse",
                      };
                return (
                  <StackComponent
                    sx={{
                      alignItems: "center",
                      ...stackStyle,
                      "& .rce-avatar-container": {
                        width: "38px",
                        height: "38px",
                      },
                    }}
                  >
                    {type === "incoming" ? (
                      <Avatar
                        src={conversation.img}
                        alt="avatar"
                        type="rounded"
                      />
                    ) : null}
                    {type === "incoming" ? (
                      <SenderMessageBoxComp {...eachMessage} />
                    ) : (
                      <RecieverMessageBoxComp {...eachMessage} />
                    )}
                  </StackComponent>
                );
              })
            : null,
        ]}
      </div>
      <SendMessage handleSend={sendAction} />
      {/* <VoiceRecorder /> */}
    </StackComponent>
  );
};

export default ChatWindowComponent;
