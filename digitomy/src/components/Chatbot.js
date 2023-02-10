import React from "react";
import { FaTimes } from "react-icons/fa";
import { BiPaperPlane } from "react-icons/bi";
import "./chatbot.css";
const ChatBot = ({ setIsChatOpen, isChatOpen }) => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([
    { message: "Hello! How may I be of service?", sender: "bot" },
  ]);

  const handleMessage = (event) => {
    setMessage(event.target.value);
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  console.log(messages);
  const handleSubmit = (event) => {
    event.preventDefault();

    let response;
    const lowerCaseMessage = message.toLowerCase();
    if (/\btime\b/.test(lowerCaseMessage)) {
      response = "The current time is " + new Date().toLocaleTimeString();
    } else if (/\bdate\b/.test(lowerCaseMessage)) {
      response = "Today's date is " + new Date().toLocaleDateString();
    } else if (/\bweather\b/.test(lowerCaseMessage)) {
      response =
        "I'm sorry, I am not currently able to access weather information.";
    } else if (/\bnews\b/.test(lowerCaseMessage)) {
      response =
        "I'm sorry, I am not currently able to access news information.";
    } else if (/\bwhat.*do.*you.*like\b/.test(lowerCaseMessage)) {
      response = "As a computer program, I do not have personal preferences.";
    } else if (/\bwhat.*your.*purpose\b/.test(lowerCaseMessage)) {
      response = "My purpose is to assist and provide information to users.";
    } else if (/\byour.*creator\b/.test(lowerCaseMessage)) {
      response = "I was created by OpenAI.";
    } else if (/\bwhat.*can.*you.*do\b/.test(lowerCaseMessage)) {
      response =
        "I can answer questions and provide information on various topics.";
    } else if (/\btell.*joke\b/.test(lowerCaseMessage)) {
      response =
        "Why did the tomato turn red? Because it saw the salad dressing!";
    } else if (
      /\bwhat.*your.*favorite.*(color|food|animal|music|movie|book|sport)\b/.test(
        lowerCaseMessage
      )
    ) {
      response = "As a computer program, I do not have personal preferences.";
    } else if (lowerCaseMessage === "hello" || lowerCaseMessage === "hi") {
      response = "Hello! How can I help you today?";
    } else if (lowerCaseMessage === "what is your name?") {
      response = "I am Digitomy_Bot. Nice to meet you!";
    } else if (lowerCaseMessage === "how are you?") {
      response =
        "I am a computer program so I don't have emotions, but I am functioning well. Thank you for asking!";
    } else {
      response =
        "I am sorry, I did not understand your message. Can you try rephrasing?";
    }

    setMessages([
      ...messages,
      { message: message, sender: "user" },
      { message: response, sender: "bot" },
    ]);

    setMessage("");
  };

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
                }}
                size={30}
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
          <div className="chat-body">
            <div className="message-container">
              {messages.map((item, index) => (
                <div
                  className={`${
                    item.sender === "user" ? "user-message" : "bot-message"
                  }`}
                  key={index}
                >
                  <p>{item.message}</p>
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
                autoFocus
                onChange={handleMessage}
                placeholder="Type your message"
                style={{
                  width: "90%",
                  color: "white",
                  height: 20,
                  marginRight: 20,
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
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
