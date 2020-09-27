import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

// import { Container } from './styles';

const DashBoard: React.FC = () => {
  const username = localStorage.getItem('@stock-web:user');
  const history = useHistory();

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
    history.push('/');
  }

  return (
    <>
      <h1>Bem vindo(a)! {username} </h1>
      <button onClick={handleSignOut}>Sair</button>
    </>
  );
};

export default DashBoard;
