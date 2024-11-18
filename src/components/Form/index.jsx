import { FormStyle } from "./styles";
import Track from "../Track";
import PersonalInfo from "../PersonalInfo";
import SelectPlan from "../SelectPlan";
import AddOns from "../AddOns";
import Summary from "../Summary";
import Footer from "../Footer";

import { useState } from "react";

export default function Form () {
    const [selectedStep, setSelectedStep] = useState(1);

    const handleChangeStep = (step) => {
        setSelectedStep(step);
    }
    
    const getFormSection = () => {
        if(selectedStep === 1) return <PersonalInfo />;
        if(selectedStep === 2) return <SelectPlan />;
        if(selectedStep === 3) return <AddOns />;
        if(selectedStep === 4) return <Summary />;
    }

    return (
        <FormStyle>
            <div className="form-container">
                <Track selectedStep={selectedStep}/>
                <div className="form-section">
                    {getFormSection()}
                    <Footer step={selectedStep} onChangeStep={handleChangeStep}/>
                </div>
            </div>
        </FormStyle>
    );
}