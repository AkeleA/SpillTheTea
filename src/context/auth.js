import React from "react";
import { loginWithGoogle } from "../services/firebase";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, setUser] = React.useState(null);

  const login = async () => {
    const user = await loginWithGoogle();
    if (!user) {
      // What shall I do?
    }
    setUser(user);
  };

  const value = { user, login };

  // add later as child of authcontext.provider {...props}
  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
