import { InputStyle } from "./styles";

export default function Input ({label, type, placeholder, required}) {
    return (
        <InputStyle>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} required={required}/>
        </InputStyle>
    );
};