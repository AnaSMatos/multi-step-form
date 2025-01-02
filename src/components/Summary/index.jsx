import { SummaryStyle } from "./styles";
import SectionTitle from "../../design/SectionTitle";
import { useContext } from "react";
import SummaryContext from "../../context/summary-context";

export default function Summary () {
    const { summary } = useContext(SummaryContext);
    
    return (
        <SummaryStyle>
            <SectionTitle title="Finishing up" instructions="Double-check everything looks OK before confirming."/>
        </SummaryStyle>
    );
}