import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isLoggedIn = sessionStorage.getItem("username");

  return isLoggedIn ? Component : <Navigate to="/" />;
};

export default ProtectedRoute;
