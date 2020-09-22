import React, { useCallback, useContext, useRef } from "react";
import * as Yup from "yup";
import { FiUser, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import getValidationErros from "../../utils/getValidationErros";
import Input from "../../components/input";

import { AuthContext } from "../../contexts/AuthContext";

import { Container, Content, Background } from "./styles";

interface SignInData {
  username: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, user } = useContext(AuthContext);

  console.log(user);

  const handleSignIn = useCallback(
    async (data: SignInData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required("Username obrigatório"),
          password: Yup.string().min(4, "No minimo 4 digitos"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({
          username: data.username,
          password: data.password,
        });
      } catch (error) {
        const errors = getValidationErros(error);
        formRef.current?.setErrors(errors);
        console.log(error);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <h1>Stock's</h1>
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
