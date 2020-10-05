import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

import Layout from '../../components/Layout';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../utils/apiClient';

import ProductIcon from '../../assets/product.png';
import OutIcon from '../../assets/sair.png';
import HomeIcon from '../../assets/home.png';
import ClientIcon from '../../assets/cliente.png';
import VendaIcon from '../../assets/bens.png';

import { Menu, CategoryArea, TitleArea, ListCategory } from './styles';

interface CategoryData {
  description: string;
}

interface categoryIndex {
  id: number;
  description: string;
}

const Category: React.FC = () => {
  const { signOut } = useAuth();
  const history = useHistory();

  const [categories, setCategories] = useState<CategoryData>({
    description: '',
  });
  const [catIndex, setCatIndex] = useState<categoryIndex[]>([]);

  useEffect(() => {
    getCategories();
  }, [catIndex]);

  //buscar categorias
  async function getCategories() {
    const response = await api.get('categories');

    setCatIndex(response.data);
    console.log(response);
  }

  //update inputs
  function updateInpus(e: ChangeEvent<HTMLInputElement>) {
    setCategories({
      ...categories,
      [e.target.name]: e.target.value,
    });
  }

  //send form
  async function handleRegisterCategory() {
    await api.post('categories', categories);
    setCategories({ description: '' });
  }

  //delete item

  async function handleDelete(id: number) {
    await api.delete(`categories/${id}`);
    history.push('/categories');
  }

  function hadleSignOut() {
    signOut();
    history.goBack();
  }
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
        <button onClick={hadleSignOut}>
          <img src={OutIcon} alt="" />
        </button>
      </Menu>

      <CategoryArea>
        <TitleArea>
          <strong>Cadastrar Categoria</strong>
        </TitleArea>
        <hr />

        <form onSubmit={handleRegisterCategory}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="description"
            placeholder="Categoria"
            value={categories.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateInpus(e)}
          />
          <button type="submit">Cadastrar</button>
        </form>

        <ListCategory>
          {catIndex.map(item => (
            <ul key={item.id}>
              <li>
                <strong>{item.description}</strong>
              </li>
              <li>
                <button>
                  <FiEdit2 />
                </button>
                <button onClick={() => handleDelete(item.id)}>
                  <MdDelete />
                </button>
              </li>
            </ul>
          ))}
        </ListCategory>
      </CategoryArea>
    </Layout>
  );
};

export default Category;
