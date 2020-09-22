import React from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";

import Input from "../../components/input";

import { Container, Content, Background } from "./styles";

function handleSunmit(data: object): void {
  console.log(data);
}

const Signup: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <h1>Stock's</h1>
        <Form onSubmit={handleSunmit}>
          <Input placeholder="user name" name="user-name" icon={FiUser} />
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
