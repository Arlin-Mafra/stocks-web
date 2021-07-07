import { Form } from '@unform/web';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { FiEdit2, FiPlus } from 'react-icons/fi';
import { GrSubtract } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import VendaIcon from '../../assets/bens.png';
import ClientIcon from '../../assets/cliente.png';
import HomeIcon from '../../assets/home.png';
import nullImage from '../../assets/nullImage.png';
import ProductIcon from '../../assets/product.png';
import OutIcon from '../../assets/sair.png';
import Avatar from '../../components/Avatar';
import Layout from '../../components/Layout';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../utils/apiClient';
import {
    Button,
    FormProduct,
    ListProducts,
    Menu,
    ProductArea,
    TitleArea
} from './styles';

interface catIndex {
    id: number;
    description: string;
}

interface ProductIndex {
    id: number;
    name: string;
    attachments: {
        url: string;
    };
    amount: number;
    categories: {
        description: string;
    };
}

const Product: React.FC = () => {
    const { signOut } = useAuth();
    const history = useHistory();

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [category_id, setCategory_id] = useState('');
    const [attachment_id, setAttachment_id] = useState('');
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
        console.log(response.data)
        setCatIndex(response.data);
    }
    //find products
    async function getproducts() {
        const response = await api.get('products');
        setProductIndex(response.data);

    }

    //send form
    async function handleRegisterProduct() {
        try {
            // const data = new FormData();
            // data.append('name', name);
            // data.append('amount', String(amount));
            // data.append('category_id', category_id);
            // data.append('attachment_id', contextTypes);
            await api.post('products', {name,amount,
                category_id:Number(category_id),
                attachment_id:Number(attachment_id)
            });
            alert('Produto adicionado!');
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
        if(amount <= 0){
            return
        }
        setAmount(amount - 1);
    }

    //Logout
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

                <FormProduct>
                    <Form
                        initialData={Product}
                        onSubmit={handleRegisterProduct}
                    >
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="nome"
                            value={name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setName(e.target.value)
                            }
                        />
                        <label htmlFor="name">Quantidade</label>
                        <Button type="button" onClick={decrement}>
                            <GrSubtract />
                        </Button>
                        {amount}

                        <Button type="button" onClick={increment}>
                            <FiPlus />
                        </Button>
                        <label htmlFor="name">Categoria</label>
                        <select
                            value={category_id}
                            onChange={e => setCategory_id(e.target.value)}
                        >
                            <option value="Selecione" defaultValue="Selecione">
                                Selecione
                            </option>
                            {catIndex.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.description}
                                </option>
                            ))}
                        </select>

                        <Avatar name="attachment_id"

                        />

                        <Button isSubmit type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </FormProduct>

                <ListProducts>
                    <table>
                        <thead>
                            <tr>
                                <th>Foto</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Categoria</th>
                                <th>Açoes</th>
                            </tr>
                        </thead>
                        {ProductIndex.map(item => (
                            <tbody key={item.id}>
                                <tr>
                                    <td>
                                        <img
                                            src={nullImage || item.attachments.url}
                                            alt={item.name}
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.categories.description || null}</td>
                                    <td>
                                        <button
                                            onClick={() => handleEdit(item.id)}
                                        >
                                            <FiEdit2 />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                        >
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
