import React from "react";
import { Route, Routes } from "react-router-dom";
import Frontend from "../Frontend";
import User from "../User";
import Admin from "../Admin";

const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/user/*" element={<User />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="*" element={<>Page Not page</>} />
    </Routes>
  );
};

export default Index;
