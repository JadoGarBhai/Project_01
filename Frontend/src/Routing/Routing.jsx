import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Frontend from "../pages/LandingPage";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgetPassword from "../pages/auth/ForgetPassword";
import NoPage from "./NoPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Frontend />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgetPassword />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
