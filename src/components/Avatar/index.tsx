import { useField } from '@unform/core';
import React, { useEffect, useRef, useState } from 'react';
import nullImage from '../../assets/nullImage.png';
import api from '../../utils/apiClient';
import { Container } from './styles';

const Avatar: React.FC<any> = () => {
    const { defaultValue, registerField } = useField('attachment_id');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef<any>(null);

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'attachment_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);

    async function handleChange(e: any) {
        const dataForm = new FormData();
        dataForm.append('file', e.target.files[0]);

        const response = await api.post('attachments', dataForm);

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);

        console.log(response.data);
    }
    return (
        <Container>
            <label htmlFor="attachment_id">
                <img src={preview || nullImage} alt="" />

                <input
                    type="file"
                    id="attachment_id"
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                    ref={ref}
                />
            </label>
        </Container>
    );
};

export default Avatar;
