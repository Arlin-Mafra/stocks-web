/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../utils/apiClient';

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
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setdata] = useState<AuthData>(() => {
    const token = localStorage.getItem('@stock-web:token');
    const user = localStorage.getItem('@stock-web:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthData;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('auth', {
      username,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem('@stock-web:token', token);
    localStorage.setItem('@stock-web:user', JSON.stringify(user));

    setdata({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@stock-web:token');
    localStorage.removeItem('@stock-web:user');
    setdata({} as AuthData);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('use auth must be used within an Authprovider');
  }
  return context;
}

export { AuthProvider, useAuth };
