import styled from "styled-components";

export const Container = styled.section`
    > ul {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        > li {
            list-style-type: none;
            display: flex;
            align-items: center;
            gap: 15px; 
        }
    }
`;