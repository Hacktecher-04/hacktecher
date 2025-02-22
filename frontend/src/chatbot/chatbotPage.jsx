import React from "react";
import { useLocation, Link } from "react-router-dom";
import Chatbot from "./Chatbot/Chatbot.jsx";

const ChatbotPage = () => {
  const query = new URLSearchParams(useLocation().search).get("query");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000', borderRadius: '16px', padding: '16px', margin: '16px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
        <h1 style={{ color: '#ffffff' }}>Chatbot</h1>
        <Chatbot query={query} />
      </div>
      <Link to="/" style={{ marginTop: '16px', padding: '8px 16px', backgroundColor: '#6b7280', color: '#ffffff', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Back to Home</Link>
    </div>
  );
};

export default ChatbotPage;

