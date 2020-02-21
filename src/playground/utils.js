console.log('utils.js is running');

const square = (x) => x*x;

const add = (a,b) => a+b;

const subtract = (a,b) => a - b;

const isSenior = (age) => age >= 60;

//exports - default export , named export
export default isSenior;
export {square, add, subtract}; // named