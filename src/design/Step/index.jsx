import { StepStyle } from "./styles";

export default function Step ({ step, title }) {
    return (
        <StepStyle>
            <div className="step-main-number">
                <p>{step}</p>
            </div>
            <div className="step-info">
                <span className="step-number">STEP {step}</span>
                <span className="step-title">{title}</span>
            </div>
        </StepStyle>
    );
}