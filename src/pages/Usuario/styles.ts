import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1024px;
  height: 100vh;
`;
export const Menu = styled.div`
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

export const UserDetailArea = styled.div`
  background: #ccefd4;
  height: 100vh;
  margin-top: 64px;
  justify-content: center;
  flex-direction: columns;
  padding: 30px;
`;

export const TitleArea = styled.div`
  margin-top: 30px;
  width: 100%;
  text-align: center;

  strong {
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
  }
  hr {
    width: 100%;
    margin-top: 30px;
  }
`;

export const UserDetail = styled.div`
  margin-top: 100px;

  ul {
    list-style: none;
    margin-left: 50px;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 6fr 1fr 1fr;
  }
  && ul {
    margin-bottom: 30px;
  }

  li {
    display: flex;
    justify-content: center;
  }
`;
