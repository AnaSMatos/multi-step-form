import { TrackSideBar } from "./styles";
import TrackBackground from "../../assets/images/bg-sidebar-desktop.svg";
import Step from "../../design/Step";

export default function Track ({selectedStep}) {
    const steps = [
        {step: 1, title: 'YOUR INFO', selected: selectedStep === 1},
        {step: 2, title: 'SELECT PLAN', selected: selectedStep === 2},
        {step: 3, title: 'ADD-ONS', selected: selectedStep === 3},
        {step: 4, title: 'SUMMARY', selected: selectedStep === 4},
    ]
    
    return (
        <TrackSideBar>
            <img src={TrackBackground} alt="Track Background"/>
            <div className="content-container">
                {steps.map(step => (
                    <Step key={step.step} step={step.step} title={step.title} selected={step.selected}/>
                ))}
            </div>
        </TrackSideBar>
    );
}