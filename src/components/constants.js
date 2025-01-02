import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg'

const addonOptions = [
    {
        id: 1, 
        name: 'Online service', 
        price: 1, 
        description: 'Access to multiplayer games',
        selected: false
    },
    {
        id: 2, 
        name: 'Larger storage', 
        price: 2, 
        description: 'Extra 1TB of cloud save',
        selected: false
    },
    {
        id: 3, 
        name: 'Customizable Profile', 
        price: 2, 
        description: 'Custom theme on your profile',
        selected: false
    },
]

const plans = [
    {id: 0, icon: arcade, title: "Arcade", price: "$9/mo", priceValue: 9},
    {id: 1, icon: advanced, title: "Advanced", price: "$12/mo", priceValue: 12},
    {id: 2, icon: pro, title: "Pro", price: "$15/mo", priceValue: 15},
]

const billingOptions = ['monthly', 'yearly'];

const initialSummary = {
    plan: plans[0],
    billing: billingOptions[0],
    addons: [],
}

export {addonOptions, plans, billingOptions, initialSummary};