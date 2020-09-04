import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./chat.css";

const Chat = ({ name, message, profilePic, timestamp }) => {
  return (
    <div className="chat">
      <Avatar className="chat__image" alt={name} src={profilePic} />
      <div className="chat__details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </div>
  );
};

export default Chat;
