import { AddOnsStyle } from "./styles";
import SectionTitle from "../../design/SectionTitle";
import AddOn from "./AddOn";
import { addonOptions } from "../constants";

export default function AddOns () {
    return (
        <AddOnsStyle>
            <SectionTitle title="Pick add-ons" instructions="Add-ons help enhance your gaming experience."/>
            <div className="addon-section">
                {addonOptions.map(addon => (
                    <AddOn key={addon.id} addon={addon}/>
                ))}
            </div>
        </AddOnsStyle>
    );
}