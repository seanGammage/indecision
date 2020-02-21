
const isAdult = (age) => {
    return age >= 18 ? 'You are an adult!': 'You are not an adult bitch!';
}

const canDrink = (age) => {
    return age >= 21 ? 'You can drink, cheers!': 'Suck it bitch, you cannot drink!'
}

export {isAdult, canDrink}