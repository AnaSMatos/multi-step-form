import styled from "styled-components";

export const SelectPlanStyle = styled.div`
    .plans-container{
        display: flex;
        gap: 20px;
        margin: 40px 0;
    }
    .plan{
        border: 1px solid var(--font-extra-muted);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        cursor: pointer;
        width: 110px;
        height: 130px;
        img{
            width: 40px;
        }
        &.selected{
            border: 1px solid var(--font-primary);
            background-color: var(--light-blue-background);
        }
        &:hover{
            border: 1px solid var(--font-primary);
        }
    }
    .plan-title{
        font-weight: bold;
        font-size: 18px;
        color: var(--font-primary);
    }
    .plan-price{
        color: var(--font-muted);
        font-weight: semi-bold;
    }
    .plan-info{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .billing-options{
        background-color: var(--light-blue-background);
        border-radius: 10px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        color: var(--font-muted);
        font-weight: 600;
        font-size: 14px;
        span {
            transition: all 0.2s ease-in-out;
        }
        .selected{
            color: var(--font-primary);
        }
    }

`;