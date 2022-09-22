const prompt = require('prompt-sync')({sigint: true});
let userArray = JSON.parse(prompt('Enter an array: '));
// check if array has an item 3
if(userArray.length < 3){
    console.log('Array does not have an item 3');
} else {
    // check item 3 to see if its a string
    if(typeof userArray[2] === 'string'){
        // if string is not long enough
        if(userArray[2].length < 2){
            console.log('String is only 1 char long');
        } else {
            // if string and long enough print it
            console.log('The second char of the third item in the array is ' + userArray[2][1]);
        }
    } else {
        // if not string print error
        console.log("Error, item 3 is not a string");
    }
}