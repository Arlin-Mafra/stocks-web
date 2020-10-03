import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';

import {
  Container,
  Menu,
  Content,
  UserDetailArea,
  TitleArea,
  UserDetail,
} from './styles';

import api from '../../utils/apiClient';

import Header from '../../components/Header';
import ProductIcon from '../../assets/product.png';
import OutIcon from '../../assets/sair.png';
import HomeIcon from '../../assets/home.png';
import ClientIcon from '../../assets/cliente.png';
import VendaIcon from '../../assets/bens.png';
import { useAuth } from '../../contexts/AuthContext';

interface UserData {
  id: number;
  username: string;
  email: string;
}

const Usuario: React.FC = () => {
  const [user, setUsers] = useState<UserData[]>([]);

  const { signOut } = useAuth();

  const history = useHistory();

  async function indexUsers() {
    const users = await api('users');

    setUsers(users.data);

    console.log(users.data);
  }
  useEffect(() => {
    indexUsers();
  }, []);

  async function handleEditUser(id: number) {
    history.push(`/users/${id}`);
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Content>
        <Header />
        <Menu>
          <Link to="/">
            <img src={VendaIcon} alt="Vendas" />
          </Link>
          <Link to="/">
            <img src={ProductIcon} alt="Vendas" />
          </Link>
          <Link to="/">
            <img src={HomeIcon} alt="Home" />
          </Link>
          <Link to="/">
            <img src={ClientIcon} alt="Clientes" />
          </Link>
          <button onClick={() => handleSignOut()}>
            <img src={OutIcon} alt="Sair" />
          </button>
        </Menu>

        <UserDetailArea>
          <TitleArea>
            <strong>Lista de Usuários</strong>
            <hr />
          </TitleArea>

          <UserDetail>
            {user.map(item => (
              <ul key={item.id}>
                <li>
                  <strong>{item.username}</strong>
                </li>
                <li>
                  <strong>{item.email}</strong>
                </li>
                <li>
                  <button onClick={() => handleEditUser(item.id)}>
                    <FiEdit2 size={20} />
                  </button>
                </li>
              </ul>
            ))}
          </UserDetail>
        </UserDetailArea>
      </Content>
    </Container>
  );
};

export default Usuario;
