import React from "react";
import mailIcon from "../../assets/mail-account.svg";
import passIcon from "../../assets/pass.svg";

import { Container, Content, Background } from "./styles";

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Stock's</h1>
        <form>
          <div>
            <img src={mailIcon} alt="" />
            <input placeholder="email" />
          </div>
          <div>
            <img src={passIcon} alt="" />
            <input type="password" placeholder="senha" />
          </div>

          <button type="submit">Entrar</button>
        </form>
        <a href="teste">Não tem uma conta? Clique aqui!</a>
      </Content>

      <Background />
    </Container>
  );
};

export default Signin;
