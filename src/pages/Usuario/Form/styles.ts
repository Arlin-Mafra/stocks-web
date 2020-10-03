import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  h1 {
    display: flex;
    align-self: center;
    color: #fff;
    margin-top: 100px;
  }
`;

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  background: #fff;
  border: 1px solid;
  margin-top: 100px;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  label {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    width: 300px;
    height: 30px;
    padding: 5px 10px;
    margin-bottom: 20px;
    background: #40855d;
    color: #fff;
  }

  && button {
    margin-top: 50px;
  }
`;
