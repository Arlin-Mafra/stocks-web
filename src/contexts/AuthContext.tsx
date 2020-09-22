import React, { createContext, useCallback, useState } from "react";
import api from "../utils/apiClient";

interface AuthData {
  token: string;
  user: object;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setdata] = useState<AuthData>(() => {
    const token = localStorage.getItem("@stock-web:token");
    const user = localStorage.getItem("@stock-web:user");
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthData;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post("auth", {
      username,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem("@stock-web:token", token);
    localStorage.setItem("@stock-web:user", JSON.stringify(user));

    setdata({ token, user });
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
