import styled from 'styled-components';

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

  form {
    display: flex;
    justify-content: center;
    align-items: center;
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
`;
