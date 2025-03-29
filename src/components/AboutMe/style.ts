import styled from "styled-components";

export const Container = styled.section`
    padding: 30px;

    > div {
        margin-top: 15px;

        > p{
            line-height: 1.5;
        }

        & > p:not(:last-of-type){
            margin-bottom: 15px;
        }
    }
`;