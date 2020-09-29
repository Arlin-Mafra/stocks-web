import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import { Container, Content, Avatar } from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';
import CatIcon from '../../assets/catProdutos.png';
import ProductIcon from '../../assets/product.png';
import OutIcon from '../../assets/sair.png';
import UsersIcon from '../../assets/users.png';
import ClientIcon from '../../assets/cliente.png';
import VendaIcon from '../../assets/bens.svg';

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
      <Container>
        <Header />
        <Avatar>
          <strong>Bem vindo! {username}</strong>
        </Avatar>
        <Content>
          <Button>
            <img src={VendaIcon} alt="" />
          </Button>
          <Button>
            <img src={UsersIcon} alt="" />
          </Button>
          <Button>
            <img src={ClientIcon} alt="" />
          </Button>
          <Button>
            <img src={CatIcon} alt="" />
          </Button>
          <Button>
            <img src={ProductIcon} alt="" />
          </Button>
          <Button>
            <img src={OutIcon} alt="" />
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default DashBoard;
