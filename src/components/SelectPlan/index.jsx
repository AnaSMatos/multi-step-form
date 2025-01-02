import { SelectPlanStyle } from "./styles";
import SectionTitle from "../../design/SectionTitle";
import { useState } from "react";
import CustomSwitch from "../../design/CustomSwitch";
import { plans } from "../constants";
import SummaryContext from "../../context/summary-context";
import { useContext } from "react";

const Plan = ({icon, title, price, selected, onSelect}) => {
    return (
        <div className={`plan ${selected && "selected"}`} onClick={onSelect}>
            <img src={icon} alt="Plan Icon"/>
            <div className="plan-info">
                <span className="plan-title">{title}</span>
                <span className="plan-price">{price}</span>
            </div>
        </div>
    )
};

export default function SelectPlan () {
    const { summary, setSummary } = useContext(SummaryContext);
  
    const selectPlan = (plan) => {
        setSummary({...summary, plan})
    };

    const selectBilling = (billing) =>{
        setSummary({...summary, billing})
    };

    const isBillingYearly = summary.billing === "yearly";

    return (
        <SelectPlanStyle>
            <SectionTitle title="Select your plan" instructions="You have the option of monthly or yearly billing."/>
            <div className="plans-container">
                {plans.map((plan, index) => (
                    <Plan 
                        key={plan.title} 
                        icon={plan.icon} 
                        title={plan.title} 
                        price={plan.price}
                        selected={plan.id === summary.plan.id}
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