import styled from "styled-components";

export const FooterStyle = styled.div`
    position: absolute;
    width: 100%;
    bottom: 20px;
    display: flex;
    .next-step{
        margin-left: auto;
    }
    .next-step, .go-back{
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
    .go-back{
       border: none;
       background: none;
       color: var(--font-primary);
       font-weight: bold;
       font-size: 16px;
    }
`;