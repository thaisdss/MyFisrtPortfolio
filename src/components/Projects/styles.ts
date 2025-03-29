import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    @media(max-width: 396px) {
        display: block;
        text-align: center;
        padding-top: 15px;
        
        p{
            margin-top: 15px;
        }
    }
`;