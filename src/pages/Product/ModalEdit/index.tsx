import { Form } from '@unform/web';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useHistory, useParams } from 'react-router-dom';
import Avatar from '../../../components/Avatar';
import api from '../../../utils/apiClient';

interface IProductData {
    id?: number;
    name: string;
    amount: number;
    attachment_id: any;
    category_id: any;
}

interface ICategoryData {
    id: number;
    description: string;
}

interface newTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalEdit ({isOpen, onRequestClose}: newTransactionModal)  {

    const [categories, setCategories] = useState<ICategoryData[]>([]);
    const [attachment_id, setAttachment_id] = useState('');
    const [product, setProduct] = useState<IProductData>({
        name: '',
        amount: 0,
        category_id: '',
        attachment_id: '',
    });

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        findProduct(id);
    }, [id]);

    useEffect(() => {
        getCategories();
    }, []);

    //buscar categorias
    async function getCategories() {
        const response = await api.get('categories');
        setCategories(response.data);
    }

    //buscar o produto
    async function findProduct(id: number) {
        const response = await api.get(`/products/${id}`);
        setProduct({
            name: response.data.name,
            amount: response.data.amount,
            category_id: response.data.categories.id,
            attachment_id: response.data.attachments.url,
        });
        console.log(response.data);
    }

    //editar produto
    function updateProduct(e: any) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    }

    //submit
    async function handleSubmit() {
        await api.put(`/products/${id}`, {
            name: product.name,
            amount: product.amount,
            category_id: Number(product.category_id),
            attachment_id,
        });
        alert('Produto atualizado!');
        history.push('/products');
    }
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Editar Produto</h2>

            <Form onSubmit={handleSubmit} initialData={ModalEdit}>
                Nome:
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    required
                    onChange={(e: any) => updateProduct(e)}
                />
                <br />
                Quantidade:
                <input
                    type="number"
                    min="0"
                    name="amount"
                    required
                    value={product.amount}
                    onChange={(e: any) => updateProduct(e)}
                />{' '}
                <br />
                Categoria:
                <select
                    name="category_id"
                    value={product.category_id}
                    onChange={(e: any) => updateProduct(e)}
                >
                    <option value="Selecione" defaultValue="Selecione">
                        Selecione
                    </option>
                    {categories.map((item, index) => (
                        <option key={index} value={item.id}>
                            {item.description}
                        </option>
                    ))}
                </select>
                <br />
                <Avatar name="attachment_id" setImage={setAttachment_id} />
                <button type="submit">Salvar</button>
            </Form>
        </Modal>
    );
};

// export default ModalEdit;
