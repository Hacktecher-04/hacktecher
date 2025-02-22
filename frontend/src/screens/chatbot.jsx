import React, { useState, useEffect } from "react";
import Home from "./Home";

Home.handleButtonClick = () => {
  console.log("Button clicked!");
};

const Chatbot = ({ query }) => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  // Built-in knowledge base
  const knowledgeBase = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm your friendly chatbot!",
    "bye": "Goodbye! Have a great day!",
    "who created you": "I was created by a developer using React.",
    "what is react": "React is a JavaScript library for building user interfaces.",
    "how to use react": "You can use React by following the official documentation.",
    "how to install react": "You can install React using npm or yarn.",
    "what is a component": "A component is a reusable piece of UI that can be used to build complex user interfaces.",
    "what is sine fluet": "Sine flue is a musical instrument that produces a sound by vibrating a string or strings.",
    "what is fever": "Fever is a physical condition characterized by increased body temperature.",
    "what is the capital of india": "The capital of India is New Delhi.",
    "what is the capital of australia": "The capital of Australia is Canberra.",
    "what is the capital of canada": "The capital of Canada is Ottawa.",
    "what is the capital of usa": "The capital of the USA is Washington, D.C.",
    "WHAT IS THE CAPITAL OF INDIA": "The capital of India is New Delhi.",
    "WHAT IS THE CAPITAL OF AUSTRALIA": "The capital of Australia is Canberra.",
    "WHAT IS THE CAPITAL OF CANADA": "The capital of Canada is Ottawa.",
    "WHAT IS THE CAPITAL OF USA": "The capital of the USA is Washington, D.C.",
    "What is a tratment for fever": "A treatment for fever can include rest, drinking fluids, and over-the-counter medications.",
    "whats is a treatment for sine flue": "A treatment for sine flue can include rest, drinking fluids, and over-the-counter medications.",
    "what is medicine": "Medicine is a science that studies the structure and function of the human body and its diseases.",
    "what is the sine flue Medicine": "A treatment for sine flue can include rest, drinking fluids, and over-the-counter medications.",
    "what is a doctor": "A doctor is a professional who practices medicine and is qualified to diagnose and treat diseases.",
    "what is a nurse": "A nurse is a professional who provides medical care to patients in a healthcare setting.",
  };

  // General fallback responses
  const generalTalk = [
    "I’m not sure about that. Can you ask something else?",
    "That's an interesting question! I'll try to learn more about it.",
    "Hmm... I don’t have an answer for that yet.",
  ];

  useEffect(() => {
    if (query) {
      addMessage(query);
    }
  }, [query]);

  const generateResponse = (question) => {
    question = question.toLowerCase().trim();

    // Check exact match
    if (knowledgeBase[question]) {
      return knowledgeBase[question];
    }

    // Check for partial match
    const foundKey = Object.keys(knowledgeBase).find((key) => question.includes(key));
    if (foundKey) {
      return knowledgeBase[foundKey];
    }

    // Fallback response
    return generalTalk[Math.floor(Math.random() * generalTalk.length)];
  };

  const addMessage = (question) => {
    const response = generateResponse(question);
    setMessages((prev) => [...prev, { user: true, text: question }, { user: false, text: response }]);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const question = event.target.elements.question.value.trim();
    if (question) {
      addMessage(question);
      event.target.elements.question.value = "";
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage(event);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {error ? (
          <div className="error">{error}</div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user ? "user" : "bot"}`}>
              {msg.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Chatbot;
