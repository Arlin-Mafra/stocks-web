import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    margin: 30px;

    label {
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        img {
            height: 90px;
            width: 90px;
            /* border-radius: 50%; */
            border: 3px solid;
            background-color: #eee;
        }

        input {
            display: none;
        }
    }
`;
