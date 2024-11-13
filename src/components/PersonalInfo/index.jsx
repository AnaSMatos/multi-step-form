import { PersonalInfoStyle } from "./styles";
import SectionTitle from "../../design/SectionTitle";

export default function PersonalInfo () {
    return (
        <PersonalInfoStyle>
            <SectionTitle title="Personal info" instructions="Please provide your name, email address, and phone number."/>
        </PersonalInfoStyle>
    );
}