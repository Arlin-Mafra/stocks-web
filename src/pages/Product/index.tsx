import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useHistory, } from 'react-router-dom';
import { FiEdit2, FiPlus } from 'react-icons/fi';
import { GrSubtract } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import * as Yup from 'yup';

import Layout from '../../components/Layout';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../utils/apiClient';

import ProductIcon from '../../assets/product.png';
import OutIcon from '../../assets/sair.png';
import HomeIcon from '../../assets/home.png';
import ClientIcon from '../../assets/cliente.png';
import VendaIcon from '../../assets/bens.png';

import {
  Menu,
  ProductArea,
  TitleArea,
  ListProducts,
  Form,
  Button,
} from './styles';


interface catIndex {
  id: number;
  description: string;
}

interface ProductIndex {
  id: number;
  name: string;
  amount: number;
  categories: {
    description:string;
  };
}


const Product: React.FC = () => {
  const { signOut } = useAuth();
  const history = useHistory();



  const [name,setName] = useState('')
  const [amount,setAmount] = useState(0)
  const [category_id,setCategory_id] = useState('')
  const [ProductIndex, setProductIndex] = useState<ProductIndex[]>([]);
  const [catIndex, setCatIndex] = useState<catIndex[]>([]);




  useEffect(() => {
    getproducts();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  //find cotegories
  async function getCategories() {
    const response = await api.get('categories');
    setCatIndex(response.data);

  }
  //find products
  async function getproducts() {
    const response = await api.get('products');
    setProductIndex(response.data);
  }


  //send form
  async function handleRegisterProduct( e:FormEvent) {
    e.preventDefault();

    const data = {name,amount, category_id};


    const schema = Yup.object().shape({
      name:Yup.string().required(),
      amount:Yup.number().required(),
      category_id:Yup.number().required()
    })


  try {

     await schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    await api.post('products',data)
    alert('Produto adicionado!')
    window.location.reload();
  } catch (error) {
    console.log(error);
  }

  }

  //delete item
  async function handleDelete(id: number) {
    await api.delete(`products/${id}`);
    window.location.reload();
  }

  //edit
  async function handleEdit(id: number) {
    history.push(`/products/${id}`);
   }

  function increment() {
    setAmount(amount + 1);

  }
  function decrement() {
    setAmount(amount - 1);
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
        <Link to="/products">
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

      <ProductArea>
        <TitleArea>
          <strong>Cadastrar Produto</strong>
        </TitleArea>
        <hr />

        <Form onSubmit={handleRegisterProduct}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="nome"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <label htmlFor="name">Quantidade</label>
          <Button type="button"  onClick={decrement} >
            <GrSubtract />
          </Button>
          {amount}

          <Button type="button" onClick={increment} >
            <FiPlus />
          </Button>
          <label htmlFor="name">Categoria</label>
          <select value={category_id}  onChange={e => setCategory_id(e.target.value)} >
            {catIndex.map((item,index) => (
              <option key={index}  value={item.id}>
                {item.description}
              </option>
            ))}
          </select>
          <Button isSubmit type="submit">
            Cadastrar
          </Button>
        </Form>

        <ListProducts>
            <table >
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th>Categoria</th>
                  <th>Açoes</th>
                </tr>
              </thead>
              {ProductIndex.map(item => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.categories.description}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>
                      <FiEdit2 />
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              </tbody>
              ))}
            </table>

        </ListProducts>
      </ProductArea>
    </Layout>
  );
};

export default Product;
