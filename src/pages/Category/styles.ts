import styled from 'styled-components';

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;

  button {
    background: transparent;
    border: 0;
  }

  img {
    height: 70px;
    width: 70px;
  }
`;

export const CategoryArea = styled.div`
  background: #ccefd4;
  height: 100vh;
  margin-top: 64px;
  flex-direction: columns;
  padding: 30px;

  hr {
    width: 100%;
    margin-top: 30px;
  }

  section {
    display: flex;
    justify-content: center;
    margin-top: 150px;

    label {
      font-size: 20px;
      font-weight: bold;
      margin-right: 10px;
    }

    input {
      width: 347px;
      height: 30px;
      background: #ffffff;
      border-radius: 5px 0px 0px 5px;
      padding: 6px;

      ::placeholder {
        color: #d1cfcf;
      }
    }

    button {
      width: 96px;
      height: 30px;
      background: #62997e;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0px 5px 5px 0px;
      color: #fff;

      :hover {
        background: #fff;
        color: #40855d;

        transition: 0.5s;
      }
    }
  }
`;

export const TitleArea = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  button {
    width: 145px;
    height: 40px;
    background: #40855d;
    color: #fff;
    border: 1px solid #40855d;
    border-radius: 16px;
    font-weight: bold;

    :hover {
      background: #fff;
      color: #40855d;

      transition: 0.5s;
    }
  }
`;
