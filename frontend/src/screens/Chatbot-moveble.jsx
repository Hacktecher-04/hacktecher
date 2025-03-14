import React, { useState, useEffect } from "react";
import axios from "../config/axios";
import { BsChatDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import "../css/Chat-move.css"; // Add your custom styles here

const Chatbotmoveble = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    try {
      const response = await axios.get(`/ai/get-result?promt=${input}`);
      const aiMessage = { text: response.data, sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chatbot-container" style={{ position: "fixed", bottom: "rem", right: "2rem", width: open ? "300px" : "40px", height: open ? "400px" : "40px" }}>
      {!open && (
        <button className="chat-toggle-btn btn btn-primary" onClick={toggleChat}>
          <BsChatDots size={24} />
        </button>
      )}

      {open && (
        <div className="chat-window shadow-lg p-3" style={{ width: "100%", height: "100%" }}>
          <div className="chat-header d-flex justify-content-between">
            <h5>Chatbot</h5>
            <IoClose size={24} className="close-icon" onClick={toggleChat} />
          </div>
          <div className="chat-body" style={{ maxHeight: "calc(100% - 100px)", overflowY: "scroll" }}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-footer d-flex" style={{ position: "absolute", bottom: "2rem", right: "1rem", width: "90%" }}>
            <input
              type="text"
              className="form-control flex-end"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="btn btn-success" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbotmoveble;
