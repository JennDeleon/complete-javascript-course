// let js = "amazing";
// if (js === "amazing") alert("Ok its working");
// console.log(40 + 8 + 23 - 10);

const country = "USA";
const continent = "North America";
let population = 3330000;
console.log(country, continent, population);

const isIsland = 0;
let language = "English";
console.log(isIsland, population, country, language);

console.log("Population of 3290000 splint in half is " + population/2);
console.log(population + 1);

function lessThanFinland(population) {
    if (population < 5531000) {
        return console.log("less populated than Finland")
    }
}
lessThanFinland(population);

function lessThanAverage(population) {
    if (population < 3300000) {
        return console.log("less populated than average")
    } else {
        return console.log("more populated than average")
    }
}
lessThanAverage(population);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
console.log(job1);
console.log(myCurrentJob);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
//
// let firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);


let description = `Portugal is in Europe, 
and its 11 million people speak portuguese`

console.log(description);

console.log("Jonas");  //not defined
console.log(23);

let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);



// Mark and John are trying to compare their BMI (Body Mass Index),

// BMI = mass / height **2
//  OR
// mass = height * height

let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

// function totalBMI (weight, height){
//     return (weight / height ** 2).toFixed(2) + "%";
// }
// console.log(totalBMI(markWeight, markHeight)); //CORRECT!!
// console.log(totalBMI(johnWeight, johnHeight)); // CORRECT!!

// template literals
const name = "Jenn";
let age = "34";
let occupation = "unemployed";

const me = `My name is ${name} and I'm ${age},
${occupation}!`
console.log(me);

//conditionals

function oldEnoughToDrive(age) {
    if (age >= 16) {
        return console.log("You are old enough to start driving!");
    } else {
        return console.log("Sorry you're not old enough to start driving!")
    }
}

oldEnoughToDrive(8);
oldEnoughToDrive(15);
oldEnoughToDrive(16);
oldEnoughToDrive(17);


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

const johnBMI = (johnWeight / johnHeight ** 2).toFixed(2) + "%";
const markBMI = (markWeight / markHeight ** 2).toFixed(2) + "%";


function johnAndMarcsBMI (a, b){
    if (markBMI > johnBMI){
        console.log(`Marks BMI (${markBMI}) has a higher BMI!`)
    } else {
        console.log(`John's BMI ${johnBMI} a higher BMI!`)
    }
}
johnAndMarcsBMI();

// TYPE CONVERSION AND TYPE COERCION

// TYPE CONVERSION WHEN YOU WANT TO CONVERT FROM ONE TYPE TO ANOTHER

const inputYear = '1988';
//  changing string to a number
console.log(typeof inputYear);
console.log(typeof(Number(inputYear)));

const stringYear = 1988;
//changing Number to String
console.log(typeof stringYear);
console.log(typeof(String(stringYear)));

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// 1. Calculate the average score for each team, using the test data below

function average (a, b, c){
   return(a +b + c) / 3
}

console.log("Dolphins' score average: " + average(96, 108, 89).toFixed(0));
const dolphins = 98;
console.log("Koala's score average: " + average(109, 95, 123).toFixed(0));
const koalas = 109;

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

function theWinnerIs (dolphins, koalas) {
    if (dolphins > koalas) {
        console.log("Dolphins' win!")
    } else if(koalas > dolphins){
        console.log("Koala's win!")
    } else if (koalas === dolphins){
        console.log("Its a tie!")
    }
}

theWinnerIs(dolphins, koalas);


//SWITCH STATEMENTS


const day = "Tuesday";
switch (day) {
    case 'Monday':
        console.log("Practice JS");
        console.log("Watch Alex");
        break;
    case 'Tuesday':
        console.log("Interview!");
}

if (day === 'monday') {
    console.log("Practice JS");
    console.log("Watch Alex");
} else if (day === 'tuesday') {
    console.log("Interview!");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const you = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${you}`);

// The Conditional (Ternary) Operator
const newAge = 23;
// newAge >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = newAge >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (newAge >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${newAge >= 18 ? 'wine 🍷' : 'water 💧'}`);

// Coding Challenge #4

// § Data 1: Test for bill values 275, 40 and 430

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.


// const bill = 275;
// const bill = 40;
const bill = 430;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

