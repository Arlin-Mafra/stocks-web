import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiUser, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErros from '../../utils/getValidationErros';
import Input from '../../components/input';

import { useAuth } from '../../contexts/AuthContext';

import { Container, Content, Background } from './styles';

interface SignInData {
  username: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, user } = useAuth();

  const history = useHistory();

  console.log(user);

  const handleSignIn = useCallback(
    async (data: SignInData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Usename obrigatório'),
          password: Yup.string().min(4, 'No minimo 4 digitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          username: data.username,
          password: data.password,
        });
        formRef.current?.reset();
        history.push('/dashboard');
      } catch (error) {
        const errors = getValidationErros(error);
        formRef.current?.setErrors(errors);
        console.log(error);
        return;
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <h1>Stocks</h1>
        <Form onSubmit={handleSignIn} ref={formRef}>
          <Input name="username" placeholder="user name" icon={FiUser} />
          <Input
            name="password"
            type="password"
            placeholder="senha"
            icon={FiLock}
          />
          <button type="submit">Entrar</button>
        </Form>
        <Link to="/signup">Não tem uma conta? Clique aqui!</Link>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;
