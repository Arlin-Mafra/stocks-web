import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

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

interface UserData {
  id: number;
  username: string;
  email: string;
}

const Usuario: React.FC = () => {
  const inputRef = useRef(null);
  const [user, setUsers] = useState<UserData[]>([]);

  async function indexUsers() {
    const users = await api('users');

    setUsers(users.data);

    console.log(users.data);
  }
  useEffect(() => {
    indexUsers();
  }, []);

  async function handleEditUser(id: number) {
    const userEdit = await api.put(`users/${id}`);
    setUsers(userEdit.data);
    console.log(userEdit);
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
          <Link to="/">
            <img src={OutIcon} alt="Sair" />
          </Link>
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
                  <strong contentEditable>{item.username}</strong>
                </li>
                <li>
                  <strong>{item.email}</strong>
                </li>
                <li>
                  <button onClick={() => handleEditUser(item.id)}>
                    <FiEdit2 size={20} />
                  </button>
                </li>
                <li>
                  <button>
                    <MdDelete size={20} color="#40855d" />
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
