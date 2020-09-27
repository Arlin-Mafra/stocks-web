/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../utils/apiClient';

interface AuthData {
  token: string;
  user: string;
}
interface FormCredentials {
  username: string;
  email?: string;
  password: string;
}

interface AuthContextData {
  user: string;
  signIn(credentials: FormCredentials): Promise<void>;
  signUp(credentials: FormCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setdata] = useState<AuthData>(() => {
    const token = localStorage.getItem('@stock-web:token');
    const user = localStorage.getItem('@stock-web:user');
    if (token && user) {
      return { token, user };
    }
    return {} as AuthData;
  });

  //Login
  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('auth', {
      username,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem('@stock-web:token', token);
    localStorage.setItem('@stock-web:user', user.username);

    setdata({ token, user });
  }, []);

  //Cadastro
  const signUp = useCallback(async ({ username, email, password }) => {
    const response = await api.post('users', {
      username,
      email,
      password,
    });
    console.log(response.data);
    alert('Usuário criado com sucesso!');
  }, []);

  //Logout
  const signOut = useCallback(() => {
    localStorage.removeItem('@stock-web:token');
    localStorage.removeItem('@stock-web:user');
    setdata({} as AuthData);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, signUp }}>
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
