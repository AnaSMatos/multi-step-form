import styled from "styled-components";

export const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    label {
        color: var(--font-primary);
        font-size: 16px;
    }
    input {
        padding: 15px;
        border: 1px solid var(--font-extra-muted);
        border-radius: 5px;
        font-size: 16px;
        color: var(--font-primary);
        font-weight: bold;
        outline: none;
    }
    input:focus{
        border: 1px solid var(--font-primary);
    }
    input::placeholder { 
        color: var(--font-muted);
        font-weight: semi-bold;
    }
`;