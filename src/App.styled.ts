import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 30px;
    background-color: #22212C;
    color: #837E9F;

    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 100%;

    > div:first-of-type {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    > div:last-of-type {
        display: flex;
        gap: 30px;
        flex-direction: column;
        flex: 1;
    }

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
