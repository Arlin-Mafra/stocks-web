import styled, { css } from 'styled-components';

interface StyleButto {
  isSubmit?: boolean;
}

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

export const ProductArea = styled.div`
  background: #ccefd4;
  height: 100vh;
  margin-top: 64px;
  flex-direction: columns;
  padding: 30px;

  hr {
    width: 100%;
    margin-top: 30px;
  }
`;

export const FormProduct = styled.div`

     form{
        display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 100px;

      label {
            font-size: 20px;
            font-weight: bold;
            margin: 10px;
      }

      select {
            margin-right: 10px;
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

export const ListProducts = styled.div`
      margin-top: 50px;
      display: flex;
      flex-direction: column;

      td {
            text-align: center;
            padding:  5px;
            border-spacing: 20px;
      }

      & button {
            margin-right: 10px;
      }

     img  {
            height:  40px;
            width:  40px;
            border:  1px solid;
      }
`;
export const Button = styled.button<StyleButto>`
  ${props =>
    props.isSubmit
      ? css`
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
        `
      : css`
          width: 24px;
          height: 24px;
          margin: 4px;
          background: transparent;
          border: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
`;
