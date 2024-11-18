import { FooterStyle } from "./styles";

export default function Footer ({step, onChangeStep}) {
    const advanceStep = () => {
        onChangeStep(step + 1);
    }

    const goBack = () => {
        if(step > 1) onChangeStep(step - 1);
    }

    return (
        <FooterStyle>
            {step > 1 &&
                <button 
                className="go-back"
                onClick={goBack}
                >
                    Go back
                </button>
            }
            {step < 4 &&
                <button 
                className="next-step" 
                onClick={advanceStep}
                >
                    Next step
                </button>
            }
        </FooterStyle>
    );
}