"use strict";
let city = 'Dhaka';
console.log(city);
const states = [
    { name: 'mostofa', capital: 'dahak' },
    { name: 'jamal', capital: 'sylhet' },
    { name: 'tomal', capital: 'khulna' }
];
for (const state of states) {
    console.log(state.capital);
}
const x = 2 + '3';
const y = 4 + '10';
//const a = null + 10; // Operator '+' cannot be applied to types
// const b = [] + 10; // Operator '+' cannot be applied to types
const names = ['kamal', 'jamal', 'tomal'];
console.log(names[1].toUpperCase());
