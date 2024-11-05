import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";
import SignUp from "./screens/auth/SignUp";
import SignIn from "./screens/auth/SignIn";
import Dashboard from "./screens/dashboard/Dashboard";
import HomeHero from "./screens/home/Hero";
import ProfilePage from "./screens/profile/Profile";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated", isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
