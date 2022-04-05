import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/login";

import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthContext } from "./contexts/auth";

const AppRoutes = () => {

    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log('login', {email, password});
        setUser({ id: "123", email})

    }

    // user! = null   então => authenticated = true

    const logout = () => {
        console.log('logout');
    }
    }


  return (
    <Router>
      <AuthContext.Provider value={{authenticated: !!user, user, login}}>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};

export default AppRoutes;
