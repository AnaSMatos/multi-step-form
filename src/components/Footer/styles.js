import styled from "styled-components";

export const FooterStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    .next-step {
        width: 100px;
        height: 40px;
        border-radius: 5px;
        background-color: var(--font-primary);
        color: var(--font-white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;