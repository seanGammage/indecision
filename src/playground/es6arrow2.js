// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1))

// this keyword - no longer bound
const user = {
    name: 'Sean',
    cities: ['Pensacola', 'St. Louis', 'Stevens Point'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + " has lived in " + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
    }
}
console.log(user.printPlacesLived());


// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multily - return a new array of ultipliyed numbers
    numbers: [1,2,3],
    multiply() {
        return this.numbers.map((number) => number*2)
    }

}

console.log(multiplier.multiply());