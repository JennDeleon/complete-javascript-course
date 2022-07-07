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


// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
//     Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
//     Otherwise, no team wins!


// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores  X
// 2. Use the function to calculate the average for both teams                     X
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
//     Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

let calcAverage = ((a, b, c) =>  ((a + b + c) / 3).toFixed(0));



function checkWinner (avgDolphins, avgKoalas) {
    if ((avgDolphins) > (avgKoalas * 2)) { //checking if average is double
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if ((avgKoalas) > (avgDolphins * 2)) {   //checking if average is double
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log("No winners.")
    }
}

//TEST ONE
let avgDolphins = calcAverage(44, 23, 72);
console.log("Dolphins: " + avgDolphins);
let avgKoalas = calcAverage(54, 54, 49);
console.log("Koalas: " + avgKoalas);

checkWinner(avgDolphins, avgKoalas);

// TEST TWO

avgDolphins = calcAverage(85, 54, 41);
console.log("Dolphins: " + avgDolphins);
avgKoalas = calcAverage(23, 34, 27);
console.log("Koalas: " + avgKoalas);

checkWinner(avgDolphins, avgKoalas);


// ARRAYS

const arrayyys = ['1','2', '3'];
arrayyys[0] = ['2'];
console.log(arrayyys);

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
//     1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out      X
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100                X
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below                                                                              X
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before                                                      X
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip     X

// Test data: 125, 555 and 44


function tipCalc(bill){
    if (bill > 50 || bill < 300){
        return (bill * .15)
    } else {
        return (bill * .20)
    }
}
console.log(tipCalc(100));

let bills = [125, 555, 44];

let tips = ("tips = " + [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])]);
console.log(tips)

let total = [("the first bill was " +  bills[0] + " the tip was " + [tipCalc(bills[0]), " the second bill was " +  bills[1] + " the tip was " + tipCalc(bills[1]), " and the third bill was " +  bills[2] + " the tip was " + tipCalc(bills[2])])]
console.log(total);



