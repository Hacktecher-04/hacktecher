import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from "../screens/Home";
import ChatBot from "../screens/chatbot";




function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chatbot" element={<ChatBot />} />
            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;