import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate } from "react-router-dom";
const Auth = ({ children }) => {
  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Auth;
