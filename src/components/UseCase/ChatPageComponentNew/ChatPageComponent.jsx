import React, { useState } from "react";
import StackComponent from "../../Base/StackComponent";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import BoxComponent from "../../Base/BoxComponent";
import { useSelector } from "react-redux";

const ChatPageComponent = ({ data }) => {
  const [conversations, setConversations] = useState([]);
  const [selectedConverationId, setSelectedConversationId] = useState(null);

  React.useEffect(() => {
    if (data) {
      const tempConversationsData = data
        .filter((eachGroup) => eachGroup.active)
        .map((eachConversationGroup) => {
          let tempConvo = {
            id: eachConversationGroup._id,
            role: eachConversationGroup.admin ? "admin" : "user",
            img: eachConversationGroup.admin
              ? eachConversationGroup.admin.profilePic
              : eachConversationGroup.user.profilePic,
            name: eachConversationGroup.admin
              ? eachConversationGroup.admin.fullName
              : eachConversationGroup.user.fullName,
            otherPersonId: eachConversationGroup.admin
              ? eachConversationGroup.admin._id
              : eachConversationGroup.user._id,
          };
          return tempConvo;
        });

      setConversations(tempConversationsData);
    }
  }, [data]);

  const LEFT_SIDE_WIDTH = "400px";

  const currentConvo = conversations.find((eachConversation) => {
    return eachConversation.id === selectedConverationId;
  });

  return (
    <StackComponent
      sx={{
        display: "flex",
        height: "calc(100%)",
      }}
    >
      <LeftSide
        onSelectConversation={(id) => {
          setSelectedConversationId(id);
        }}
        chats={conversations}
        grow={2}
        width={LEFT_SIDE_WIDTH}
      />
      {setSelectedConversationId &&
      selectedConverationId !== "" &&
      currentConvo ? (
        <>
          <RightSide
            currentConversation={currentConvo}
            selectedConverationId={selectedConverationId}
            grow={8}
            width={`calc(100% - ${LEFT_SIDE_WIDTH})`}
          />
        </>
      ) : (
        <BoxComponent sx={{ m: "50px" }}>
          Please select a conversation to continue
        </BoxComponent>
      )}
    </StackComponent>
  );
};

export default ChatPageComponent;
