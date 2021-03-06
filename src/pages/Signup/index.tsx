import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErros from '../../utils/getValidationErros';
import Input from '../../components/input';
import { Container, Content, Background } from './styles';
import { useAuth } from '../../contexts/AuthContext';

interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signUp } = useAuth();

  const history = useHistory();

  const handleSunmit = useCallback(
    async (data: SignUpCredentials) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          username: Yup.string().required('Username obrigatório'),
          email: Yup.string().email().required('Email obrigatório'),
          password: Yup.string().min(4, 'No minimo 4 digitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        await signUp({
          username: data.username,
          email: data.email,
          password: data.password,
        });

        formRef.current?.reset();

        history.push('/');
      } catch (error) {
        const errors = getValidationErros(error);
        formRef.current?.setErrors(errors);
        console.log(error);
        return;
      }
    },
    [signUp, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <h1>Stocks</h1>
        <Form onSubmit={handleSunmit} ref={formRef}>
          <Input placeholder="user name" name="username" icon={FiUser} />
          <Input placeholder="email" name="email" icon={FiMail} />
          <Input
            type="password"
            placeholder="senha"
            name="password"
            icon={FiLock}
          />
          <button type="submit">Entrar</button>
        </Form>
        <Link to="/">Já tem login? Clique aqui!</Link>
      </Content>
    </Container>
  );
};

export default Signup;
