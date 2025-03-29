import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 30px;

    img{
        width: 45%;
        border-radius: 100%;
        border: 2px solid rgb(0, 206, 41);
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        > h1 {
            font-size: 2em;
        }
    }
`;