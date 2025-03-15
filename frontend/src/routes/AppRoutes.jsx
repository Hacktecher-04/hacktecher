import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from "../screens/Home";
import ChatBot from "../screens/chatbot";
import About from "../screens/About";
import Services from "../screens/Services";
import Privacy from "../screens/Privacy";
import Help from "../screens/Help";
import Dashboard from "../screens/Dashboard";
import Appointments from "../screens/Appointments";
import Records from "../screens/Records";
import Login from "../screens/Login";
import SearchFilter from "../screens/Serch&filter";
import DocumentPage from "../screens/Document";




function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chatbot" element={<ChatBot />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/help" element={<Help />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/records" element={<Records />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<SearchFilter />} />
                <Route path="/docs" element={<DocumentPage />} />
            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;