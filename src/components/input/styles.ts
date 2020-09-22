import styled from "styled-components";

export const Container = styled.div`
  border-radius: 40px;
  background: #40855d;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;

  & + div {
    margin-top: 10px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff;
    font-size: 18px;
    ::placeholder {
      color: #ccefd4;
    }
  }

  svg {
    margin-right: 16px;
    color: #fff;
  }
`;
