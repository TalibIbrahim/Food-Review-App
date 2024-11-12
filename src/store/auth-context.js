import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  uid: null,
  isLoggedIn: false,
  login: (token, uid, expirationTime) => {},
  logout: () => {},
});

// Calculate remaining time for token expiration to auto logout user
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

// Retrieve stored token and check expiration time
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedUID = localStorage.getItem("uid");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  // Clear expired token
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    uid: storedUID,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  const [token, setToken] = useState(tokenData ? tokenData.token : null);
  const [uid, setUID] = useState(tokenData ? tokenData.uid : null);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUID(null);
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("expirationTime");
    console.log("User logged out");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, uid, expirationTime) => {
    setToken(token);
    setUID(uid); // Now correctly setting the UID received from Firebase
    localStorage.setItem("token", token);
    localStorage.setItem("uid", uid); // Correctly store the uid from the Firebase response
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  // Set logout timer if token exists on mount
  useEffect(() => {
    if (tokenData && tokenData.duration) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    uid: uid,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
