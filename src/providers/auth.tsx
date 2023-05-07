import React, { useState } from "react";
import AuthContext from "../context/auth";

/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [code, setCode] = useState<string>("");

  let signin = (code: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setCode(code);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setCode("");
      callback();
    });
  };

  let value = { code, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
