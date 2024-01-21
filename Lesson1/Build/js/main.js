"use strict";
let username = 'Markss';
let isValid;
const sum = (a, b) => {
    console.log(a + b);
    return (a + b);
};
let evh = {
    name: 'Baque',
    active: true,
    album: [1990, 2000, 'album1']
};
let jp = {
    name: "JP",
    active: true,
    album: ['name', 'name', 'name']
};
let muni = {
    name: 'hey',
    active: true,
    album: ['name', 'name', 'name']
};
const greetGuitarist = (guitar) => {
    if (guitar.name) {
        return `Hello ${guitar.name}!`;
    }
    return "Hello Guest!";
};
console.log(greetGuitarist(evh));
console.log(evh);
console.log(username);
