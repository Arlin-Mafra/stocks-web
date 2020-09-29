import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(#ccefd4, #40855d);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1024px;

  section {
    margin-top: 200px;
    display: flex;
    justify-content: space-around;
  }
`;

export const Avatar = styled.div`
  margin: 20px 0 100px 30px;
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    margin-left: 10px;
  }
  strong {
    color: #40855d;
  }
  img {
    height: 24px;
    width: 24px;
  }
`;

export const ContentNavigation = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
