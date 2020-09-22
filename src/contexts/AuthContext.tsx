import React, { createContext, useCallback } from "react";
import api from "../utils/apiClient";

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post("auth", {
      username,
      password,
    });

    console.log(response.data);
  }, []);
  return (
    <AuthContext.Provider value={{ name: "Arlin", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
