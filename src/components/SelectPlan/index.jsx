import { SelectPlanStyle } from "./styles";
import SectionTitle from "../../design/SectionTitle";
import { useState } from "react";
import CustomSwitch from "../../design/CustomSwitch";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

const plans = [
    {id: 0, iconName: arcade, title: "Arcade", price: "$9/mo", priceValue: 9},
    {id: 1, iconName: advanced, title: "Advanced", price: "$12/mo", priceValue: 12},
    {id: 2, iconName: pro, title: "Pro", price: "$15/mo", priceValue: 15},
]

const Plan = ({iconName, title, price, selected, onSelect}) => {
    return (
        <div className={`plan ${selected && "selected"}`} onClick={onSelect}>
            <img src={iconName} alt="Plan Icon"/>
            <div className="plan-info">
                <span className="plan-title">{title}</span>
                <span className="plan-price">{price}</span>
            </div>
        </div>
    )
};

export default function SelectPlan () {
    const [selectedOptions, setSelectedOptions] = useState({
        plan: plans[0],
        billing: "monthly"
    });

    const selectPlan = (plan) => setSelectedOptions({...selectedOptions, plan});

    const selectBilling = (billing) => setSelectedOptions({...selectedOptions, billing});

    const isBillingYearly = selectedOptions.billing === "yearly";

    return (
        <SelectPlanStyle>
            <SectionTitle title="Select your plan" instructions="You have the option of monthly or yearly billing."/>
            <div className="plans-container">
                {plans.map((plan, index) => (
                    <Plan 
                        key={plan.title} 
                        iconName={plan.iconName} 
                        title={plan.title} 
                        price={plan.price}
                        selected={selectedOptions.plan.id === index}
                        onSelect={() => selectPlan(plan)}
                    />
                ))}
            </div>
            <div className="billing-options">
                <span className={isBillingYearly ? "" : "selected"}>Monthly</span>
                <CustomSwitch
                    defaultChecked={false}
                    color="primary"
                    inputProps={{ 'aria-label': 'controlled' }}
                    onChange={(e) => selectBilling(e.target.checked ? "yearly" : "monthly")}
                />
                <span className={isBillingYearly ? "selected" : ""}>Yearly</span>
            </div>
        </SelectPlanStyle>
    );
}