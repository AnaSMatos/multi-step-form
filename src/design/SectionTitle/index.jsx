import { SectionTitleStyle } from "./styles";

export default function SectionTitle ({title, instructions}) {
    return (
        <SectionTitleStyle>
            <h1>{title}</h1>
            <p>{instructions}</p>
        </SectionTitleStyle>
    );
}