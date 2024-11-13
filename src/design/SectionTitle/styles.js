import styled from "styled-components";

export const SectionTitleStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
        color: var(--font-primary);
        font-weight: bold;
        font-size: 35px;
    }
    p{
        color: var(--font-muted);
        font-size: 16px;
        letter-spacing: 0;
    }
`;