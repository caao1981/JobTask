import PropTypes from "prop-types";
import React from "react";
import { ChatItem } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import styled from "@emotion/styled";

const StyledConversationItem = styled(ChatItem)(({ theme }) => ({
  overflow: "unset !important",
}));

const ConversationItem = ({
  avatar,
  alt,
  date,
  unread,
  title,
  id,
  subtitle,
  muted,
  showMute,
  showVideoCall,
  onClickConversation,
  ...otherProps
}) => {
  return (
    <StyledConversationItem
      avatar={avatar ? avatar : null}
      alt={alt ? alt : null}
      title={title ? title : null}
      subtitle={subtitle ? subtitle : null}
      date={date ? date : null}
      muted={muted ? muted : null}
      showMute={showMute ? showMute : null}
      showVideoCall={showVideoCall ? showVideoCall : null}
      unread={unread ? unread : null}
      onClick={() => {
        onClickConversation(id);
      }}
      {...otherProps}
    />
  );
};

ConversationItem.propTypes = {
  alt: PropTypes.string,
  avatar: PropTypes.string,
  date: PropTypes.any,
  id: PropTypes.any.isRequired,
  muted: PropTypes.bool,
  onClickConversation: PropTypes.func,
  showMute: PropTypes.bool,
  showVideoCall: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  unread: PropTypes.number,
};

ConversationItem.defaultProps = {
  // avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
  // alt: "some-image",
  // date: new Date(),
  // unread: 2,
  // title: "Name",
  // subtitle: "Hello there!",
  // muted: false,
  // showMute: false,
  // showVideoCall: false,
  // onClickConversation: () => {
  //   return;
  // },
};

export default ConversationItem;
