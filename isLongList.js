const prompt = require('prompt-sync')({sigint: true});
let userArray = JSON.parse(prompt('Enter an array: '));
let bool = userArray.length >= 10;
console.log(bool);