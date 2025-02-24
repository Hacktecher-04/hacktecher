import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from "../screens/Home";




function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;