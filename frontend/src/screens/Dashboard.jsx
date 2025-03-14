import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ChatBot from "../screens/chatbot";

function Dashboard() {
  const features = [
    { name: "Appointments", path: "/appointments", color: "btn-primary" },
    { name: "Records Access", path: "/records", color: "btn-success" },
    { name: "Search & Filter", path: "/search", color: "btn-warning" },
    { name: "Notifications", path: "/notifications", color: "btn-danger" },
    { name: "Docs Generation", path: "/docs", color: "btn-info" },
    { name: "Settings", path: "/settings", color: "btn-secondary" },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Dashboard</h1>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4 mb-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to={feature.path} className={`btn ${feature.color} w-100 p-3`}> 
                {feature.name}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="p-3 bg-light rounded shadow">
            <h4>User Profile</h4>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-light rounded shadow">
            <h4>Recent Activity</h4>
            <ul>
              <li>Checked health records</li>
              <li>Scheduled an appointment</li>
              <li>Updated contact info</li>
            </ul>
          </div>
        </div>
      </div>
      <ChatBot />
    </div>

  );
}

export default Dashboard;