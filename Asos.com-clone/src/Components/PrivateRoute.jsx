import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let auth = JSON.parse(localStorage.getItem("authenticated")) || false;
  return auth ? children : <Navigate to="/signIn" />;
};

export default React.memo(PrivateRoute);
