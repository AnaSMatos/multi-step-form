import { PersonalInfoStyle } from "./styles";
import SectionTitle from "../../design/SectionTitle";
import Input from "../../design/Input";

export default function PersonalInfo () {
    return (
        <PersonalInfoStyle>
            <SectionTitle title="Personal info" instructions="Please provide your name, email address, and phone number."/>
            <form className="form">
                <Input label="Name" type="text" placeholder="e.g. Stephen King" required/>
                <Input label="Email Address" type="email" placeholder="e.g. 2l5t1@example.com" required/>
                <Input label="Phone Number" type="tel" placeholder="e.g. +1 234 567 890" required/>
            </form>
        </PersonalInfoStyle>
    );
}