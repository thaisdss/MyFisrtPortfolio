import styled from "styled-components";

export const Container = styled.section`
    cursor: pointer;
    padding: 30px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    .title {
        display: flex;
        align-items: flex-end;
        gap: 10px;
    }

    .details {
        display: flex;
        gap: 15px;
    }

    .details {
        display: flex;
        justify-content: space-between;

        > div {
            display: flex;
            align-items: flex-end;
            gap: 10px;
        }

        > div:last-of-type > img {
            width: 24px;
            height: 24px;
        }
    }
`;