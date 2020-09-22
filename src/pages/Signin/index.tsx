import React from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import Input from "../../components/input";

import { Container, Content, Background } from "./styles";

const Signin: React.FC = () => {
  function handleSignIn(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <h1>Stock's</h1>
        <Form onSubmit={handleSignIn}>
          <Input name="user-name" placeholder="user name" icon={FiUser} />
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
