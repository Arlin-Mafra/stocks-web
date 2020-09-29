import React from 'react';

import { Container } from './styles';
import HeaderImage from './assets/home.jpg';
const Header: React.FC = () => {
  return (
    <Container>
      <img src={HeaderImage} alt="header" />
    </Container>
  );
};

export default Header;
