import styled from "styled-components";

export const StepStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    .step-main-number {
        border: 1px solid var(--font-white);
        border-radius: 50%;
        color: var(--font-white);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
    }
    .step-info {
        color: var(--font-white);
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .step-title {
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 0.7px
    }
    .step-number {
        font-weight: 300;
        font-size: 12px;
        color: var(--font-extra-muted);
    }
`;