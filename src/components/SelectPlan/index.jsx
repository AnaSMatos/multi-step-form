import { SelectPlanStyle } from "./styles";
import SectionTitle from "../../design/SectionTitle";

export default function SelectPlan () {
    return (
        <SelectPlanStyle>
            <SectionTitle title="Select your plan" instructions="You have the option of monthly or yearly billing."/>
        </SelectPlanStyle>
    );
}