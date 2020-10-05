import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import { Container, Content, Avatar, ContentNavigation } from './styles';

import Header from '../../components/Header';
import CatIcon from '../../assets/catProdutos.png';
import ProductIcon from '../../assets/product.png';
import OutIcon from '../../assets/sair.png';
import UsersIcon from '../../assets/users.png';
import ClientIcon from '../../assets/cliente.png';
import VendaIcon from '../../assets/bens.png';

const DashBoard: React.FC = () => {
  const username = localStorage.getItem('@stock-web:user');

  const history = useHistory();

  const { signOut, user } = useAuth();
  console.log(user);

  function handleSignOut() {
    signOut();
    history.push('/');
  }

  return (
    <>
      <Container>
        <Content>
          <Header />
          <Avatar>
            <strong>Bem vindo! {username}</strong>
            <button onClick={handleSignOut}>
              <img src={OutIcon} alt="Sair" />
            </button>
          </Avatar>

          <ContentNavigation>
            <Link to="/">
              <img src={VendaIcon} alt="Vendas" />
            </Link>
            <Link to="/users">
              <img src={UsersIcon} alt="Usuarios" />
            </Link>
            <Link to="/">
              <img src={ClientIcon} alt="Clientes" />
            </Link>
          </ContentNavigation>
          <section>
            <Link to="/categories">
              <img src={CatIcon} alt="Categorias" />
            </Link>
            <Link to="/">
              <img src={ProductIcon} alt="Produtos" />
            </Link>
          </section>
        </Content>
      </Container>
    </>
  );
};

export default DashBoard;
