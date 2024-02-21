import React, { useEffect, useState } from "react";
import StackComponent from "../../Base/StackComponent";
import styled from "@emotion/styled";
import IconButtonComponent from "../../Base/IconButton";
import SendIcon from "@mui/icons-material/Send";

const StyledInputField = styled("textarea")(({ theme }) => ({
  fontFamily: "'Ubuntu', 'sans-serif'",
  marginTop: "28px",
  flexGrow: 9,
  fontWeight: "400",
  fontSize: "14px",
  backgroundColor: "#fafafa !important",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  padding: "8px",
  resize: "none",
}));
const SendMessage = ({ handleSend }) => {
  const [text, setText] = useState("");

  const sendHandlerFn = (inp) => {
    handleSend(text);
    setText("");
  };

  return (
    <StackComponent>
      <StyledInputField
        onKeyUp={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey) {
            sendHandlerFn(text);
          }
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Type message here..."
        multiline={true}
        value={text}
      />
      <IconButtonComponent
        sx={{ marginTop: "28px", height: "max-content" }}
        onClick={(e) => {
          sendHandlerFn(text);
        }}
      >
        <SendIcon color="primary" />
      </IconButtonComponent>
    </StackComponent>
  );
};

export default SendMessage;
