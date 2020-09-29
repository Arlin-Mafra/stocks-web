import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(#ccefd4, #40855d);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

export const Content = styled.div`
  margin-top: 10px;
  padding: 60px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  height: 100%;

  Button {
    width: 125px;
    height: 110px;
  }
`;

export const Avatar = styled.div`
  margin-top: 20px;
  strong {
    color: #40855d;
    text-align: left;
  }
`;
