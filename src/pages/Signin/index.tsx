import React from "react";
import { Link } from "react-router-dom";
import accountIcon from "../../assets/account.png";
import passIcon from "../../assets/password.png";

import { Container, Content, Background } from "./styles";

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Stock's</h1>
        <form>
          <div>
            <img src={accountIcon} alt="" />
            <input placeholder="user name" />
          </div>
          <div>
            <img src={passIcon} alt="" />
            <input type="password" placeholder="senha" />
          </div>

          <button type="submit">Entrar</button>
        </form>
        <Link to="/signup">Não tem uma conta? Clique aqui!</Link>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;
