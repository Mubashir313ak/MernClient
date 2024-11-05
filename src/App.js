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

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated", isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
