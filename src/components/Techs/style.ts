import styled from "styled-components";

export const Container = styled.section`
    padding: 30px;

    > div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-top: 30px;

        > p{
            background-color: #CB92B1;
            color: #000;
            border-radius: 30px;
            font-weight: 700;
            text-align: center;
            padding: 15px 30px;
        }

        @media(max-width: 400px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;