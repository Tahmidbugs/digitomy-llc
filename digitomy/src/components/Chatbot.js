import React from "react";
import { FaTimes } from "react-icons/fa";
import { BiPaperPlane } from "react-icons/bi";
import "./chatbot.css";

const ChatBot = ({ setIsChatOpen, isChatOpen }) => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, message]);
    setMessage("");
  };
  console.log(messages);
  return (
    <div className={`chat-container ${isChatOpen ? "glow" : ""}`}>
      {isChatOpen && (
        <>
          <div className="chat-header">
            <h3>Digitomy_Bot</h3>
            <a>
              <FaTimes
                onClick={() => {
                  setIsChatOpen(!isChatOpen);
                  console.log("turned off ", isChatOpen);
                }}
                size={30}
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
          <div className="chat-body">
            <div className="message-container">
              <div className="bot-message">
                <p>Hello! How can I help you today?</p>
              </div>
              {messages.map((item, index) => (
                <div className="user-message" key={index}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="chat-footer">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <input
                type="text"
                value={message}
                onChange={handleMessage}
                placeholder="Type your message"
                style={{
                  width: "90%",
                  color: "white",
                  height: 20,
                  marginRight: 40,
                }}
              />
              <a>
                <BiPaperPlane
                  size={40}
                  style={{ marginBottom: 20, cursor: "pointer" }}
                  class="icon"
                  onClick={handleSubmit}
                />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;
