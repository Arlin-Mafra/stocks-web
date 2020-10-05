import React from 'react';
import Header from '../Header';

import { Main, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Main>
      <Content>
        <Header />
        {children}
      </Content>
    </Main>
  );
};

export default Layout;
