import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonComponent = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonComponent> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
