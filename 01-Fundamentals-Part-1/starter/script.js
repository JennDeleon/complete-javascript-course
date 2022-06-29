let js = "amazing";
if (js === "amazing") alert("Ok its working");
console.log(40 + 8 + 23 - 10);

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

let description = `Portugal is in Europe, 
and its 11 million people speak portuguese`

console.log(description);

console.log("Jonas");  //not defined
console.log(23);

let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);