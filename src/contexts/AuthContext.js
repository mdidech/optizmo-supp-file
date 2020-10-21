import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [authen, setAuthen] = useState(false);

  const toggleAuth = () => {
    setAuthen(!authen);
    console.log(authen);
  };
  return (
    <AuthContext.Provider value={{ authen, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
