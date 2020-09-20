import styled from "styled-components";
import stockImage from "../../assets/stock.svg";

export const Container = styled.div`
  background-image: linear-gradient(#ccefd4, #40855d);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  place-content: center;
  align-items: center;

  h1 {
    color: #40855d;
    font-size: 72px;
    font-family: Roboto;
    font-weight: bold;
    margin-top: -120px;
  }

  form {
    margin: 80px 0;
    width: 400px;
    height: 350px;
    background: #fff;
    border-radius: 40px;
    text-align: center;
    padding: 40px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 15px;
      background: #40855d;
      border-radius: 40px;

      input {
        border-radius: 40px;
        background: #40855d;
        padding: 16px;
        border: 0;
        width: 100%;
        color: #fff;
        font-size: 18px;
        ::placeholder {
          color: #ccefd4;
        }
      }
      img {
        height: 24px;
        width: 24px;
        margin: 10px;
      }
    }

    button {
      width: 100%;
      height: 50px;
      margin-top: 20px;
      border-radius: 40px;
      background: #40855d;
      color: #fff;

      :hover {
        transition: 0.8s;
        background: #80ffbd;
      }
    }
  }
  a {
    text-decoration: none;
    color: #1f601f;
    text-align: center;
    margin-top: -150px;
    transition: 0.4s;
    :hover {
      color: #80ffbd;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${stockImage}) no-repeat center;
  background-size: 500px;
`;
