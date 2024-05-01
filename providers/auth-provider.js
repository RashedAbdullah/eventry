"use client";

const { AuthContext } = require("@/contexts");
const { useState } = require("react");

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
