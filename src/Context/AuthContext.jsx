import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Configure/firebase";
import { onAuthStateChanged } from "firebase/auth";
const authenticatedContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const checkAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
      }
    });
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <authenticatedContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </authenticatedContext.Provider>
  );
};

export default AuthContextProvider;

// Custom Hook
export const useAuthContext = () => {
  return useContext(authenticatedContext);
};
