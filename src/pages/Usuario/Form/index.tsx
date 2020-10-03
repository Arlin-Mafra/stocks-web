import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../../utils/apiClient';

import { Container, Form, Content } from './styles';
import Button from '../../../components/Button';

interface UserEditData {
  username: string;
  email: string;
}

const FormUser: React.FC = () => {
  const [userEdit, setUserEdit] = useState<UserEditData>({
    username: '',
    email: '',
  });

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    getUsers(id);
  }, [id]);

  //update user in form
  function updateUsers(e: ChangeEvent<HTMLInputElement>) {
    setUserEdit({
      ...userEdit,
      [e.target.name]: e.target.value,
    });
  }

  //submit form for update
  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    await api.put(`users/${id}`, userEdit);
    goHome();
  }

  //find user
  async function getUsers(id: number) {
    const response = await api.get(`/users/${id}`);
    setUserEdit({
      username: response.data.username,
      email: response.data.email,
    });
  }

  function goHome() {
    history.goBack();
  }

  return (
    <Container>
      <h1>Editar Usuário</h1>
      <Content>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="username">Nome</label>
          <input
            type="text"
            name="username"
            value={userEdit.username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateUsers(e)}
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            value={userEdit.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateUsers(e)}
          />
          <Button type="submit">Atualizar</Button>
        </Form>
        <Button onClick={goHome}>Voltar</Button>
      </Content>
    </Container>
  );
};

export default FormUser;
