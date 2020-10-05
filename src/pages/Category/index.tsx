import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

import ProductIcon from '../../assets/product.png';
import OutIcon from '../../assets/sair.png';
import HomeIcon from '../../assets/home.png';
import ClientIcon from '../../assets/cliente.png';
import VendaIcon from '../../assets/bens.png';

import { Menu, CategoryArea, TitleArea } from './styles';

const Category: React.FC = () => {
  return (
    <Layout>
      <Menu>
        <Link to="/">
          <img src={VendaIcon} alt="" />
        </Link>
        <Link to="/">
          <img src={ProductIcon} alt="" />
        </Link>
        <Link to="/">
          <img src={HomeIcon} alt="" />
        </Link>
        <Link to="/">
          <img src={ClientIcon} alt="" />
        </Link>
        <button>
          <img src={OutIcon} alt="" />
        </button>
      </Menu>

      <CategoryArea>
        <TitleArea>
          <strong>Cadastrar Categoria</strong>
          <button>Listar Categorias</button>
        </TitleArea>
        <hr />

        <section>
          <label htmlFor="Name">Nome</label>
          <input type="text" placeholder="Categoria" />
          <button>Cadastrar</button>
        </section>
      </CategoryArea>
    </Layout>
  );
};

export default Category;
