import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Frontend from "../Frontend";
import User from "../User";
import Login from "../User/Login/Login";
import Admin from "../Admin";
import { useAuthContext } from "../Context/AuthContext";

const Index = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route
        path="/user/*"
        element={
          !isAuthenticated ? <User /> : <Navigate to={"/user/dashboard"} />
        }
      />
      {/* <Route path="/user/*" element={<User />} /> */}
      <Route path="/admin/*" element={<Admin />} />
      <Route path="*" element={<h1>Page Not page</h1>} />
    </Routes>
  );
};

export default Index;
