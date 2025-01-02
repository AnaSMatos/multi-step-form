import styled from "styled-components";

export const AddOnStyle = styled.div`
    width: 100%;
    border: 1px solid var(--font-primary);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    gap: 20px;
    background-color: ${({ selected }) => selected ? 'var(--light-blue-background)' : 'var(--font-white)' };
    cursor: pointer;
    input[type="checkbox"] {
        width: 20px;
        cursor: pointer;
        accent-color: #4a3fef;
    }
    .addon-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
    }
    .title {
        font-weight: bold;
        font-size: 16px;
        color: var(--font-primary);
    }
    .description {
        font-size: 14px;
        color: var(--font-muted);
    }
    .price {
        color: #4a3fef;
    }
`;