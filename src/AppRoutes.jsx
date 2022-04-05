import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/login";

import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./contexts/auth";

const AppRoutes = () => {

    

    




    return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};











export default AppRoutes;
