import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Layout from '../../../components/Layout';
import api from '../../../utils/apiClient';
import { CategoryArea, TitleArea } from './styles';



interface CategoryData {
  description: string;
}

const Category: React.FC = () => {
  const history = useHistory();

  const [editCategory, setEditCategory] = useState<CategoryData>({
    description: '',
  });

  const { id } = useParams();

  useEffect(() => {
    getCategory(id);
  }, [id]);

  //update inputs
  function updateInpus(e: ChangeEvent<HTMLInputElement>) {
    setEditCategory({
      ...editCategory,
      [e.target.name]: e.target.value,
    });
  }

  //find category
  async function getCategory(id: number) {
    const response = await api.get(`/categories/${id}`);
    setEditCategory({
      description: response.data.description,
    });
  }

  //submit
  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    await api.put(`/categories/${id}`, editCategory);
    history.goBack();
  }

  return (
    <Layout>
      <CategoryArea>
        <TitleArea>
          <strong>Editar Categoria</strong>
          <Link to="/categories">
            <button>Voltar</button>
          </Link>
        </TitleArea>
        <hr />

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="description"
            placeholder="Categoria"
            value={editCategory.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateInpus(e)}
          />
          <button type="submit">Alterar</button>
        </form>
      </CategoryArea>
    </Layout>
  );
};

export default Category;
