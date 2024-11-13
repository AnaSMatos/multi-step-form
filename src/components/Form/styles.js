import styled from "styled-components";

export const FormStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    .form-container {
        display: flex;
        gap: 60px;
        padding: 20px;
        background-color: var(--font-white);
        width: 1000px;
        height: fit-content;
        border-radius: 20px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .form-section {
        padding: 30px;
    }
`;