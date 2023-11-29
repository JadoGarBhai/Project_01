import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthenticatedContext = createContext();

export const AuthenticatedContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoader, setIsLoader] = useState(true);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/auth/check-auth",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
        setUserId(response.data.user._id);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      } finally {
        setIsLoader(false);
      }
    };

    checkAuth();
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser({});
  };

  return (
    <AuthenticatedContext.Provider
      value={{
        isAuthenticated,
        isLoader,
        setIsAuthenticated,
        user,
        userId,
        setUserId,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthenticatedContext.Provider>
  );
};
