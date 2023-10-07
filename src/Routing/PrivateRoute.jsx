import React from "react";
import { useAuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={"/user/login"} />;
  }

  return <Component />;
};

export default PrivateRoute;
