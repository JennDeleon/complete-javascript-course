"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("Passed test");

//ARROW FUNCTION

const calc = birthYear => 2037 - birthYear;

const age = calc(1988);
console.log(age);


// function fruitProcessor(apples, oranges) {
//     // return `Juice with ` + apples + ` apples and ` + oranges + ` oranges.`
//
//     // using a template literal (below) is the cleaner way to type it.
//
//     return `Juice with ${apples} apples and ${oranges} oranges. `
//
// }
//
// console.log(fruitProcessor(5, 0));


//CALLING A FUNCTION INSIDE ANOTHER FUNCTION

function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples); // CALLING THE CUTFRUITPIECES FUNCTION
    const orangePieces = cutFruitPieces(oranges);   // CALLING THE CUTFRUITPIECES FUNCTION
    return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
}

console.log(fruitProcessor(5, 2)); // expected output "Juice with 20 apple pieces and 8 orange pieces."