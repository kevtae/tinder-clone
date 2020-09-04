import React, { useState } from "react";
import "./chatscreen.css";
import Avatar from "@material-ui/core/Avatar";
import { setLogLevel } from "firebase";
import SelectInput from "@material-ui/core/Select/SelectInput";

const ChatScreen = () => {
  const [input, setInput] = useState([]);
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
      message: "Whatsup",
    },
    {
      message: "hey",
    },
  ]);

  const handleSend = (e) => {
    //prevent from refresh
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        you matched with ellen on 10/07/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textuser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a message"
            className="chatScreen__inputField"
          />
          <button onClick={handleSend} className="chatScreen__inputButton">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
