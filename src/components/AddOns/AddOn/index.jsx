import { useState } from "react";
import { AddOnStyle } from "./styles";

export default function AddOn ({addon}) {
    const [selected, setSelected] = useState(false);
    return (
        <AddOnStyle selected={selected} onClick={() => setSelected(!selected)}>
            <input 
                type="checkbox"
                checked={selected}
            />
            <div className="addon-info">
                <span className="title">{addon.name}</span>
                <span className="description">{addon.description}</span>
            </div>
            <span className="price">+${addon.price}/mo</span>
        </AddOnStyle>
    );
}