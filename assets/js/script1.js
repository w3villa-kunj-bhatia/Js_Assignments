// Day 1

// let msg = "Welcome to JavaScript";
// alert(msg);

//log message
console.log("JavaScript Loaded");

//Write on homepage
document.write("This is a message written in the Js file<br>");

//var declaration using let & data type String
let name = "Kunj";
console.log(name);
console.log(typeof name);

//var declaration using var & data type Number
function age() {
  var n = 23;
  document.write(n);
  console.log(typeof n);
}
age();

//var declaration using const & data type String
const country = "\nIndia";
document.write(country);

// undefined datatype
var abc;
console.log(abc);

//boolean datatype
var male = true;
console.log(typeof male);

//null datatype
let nulldt = null;
console.log(typeof nulldt);

//Key value pairs / Object
const car = {
  brand: "Ferrari",
  model: "SF90",
  price: 600000,
};
console.log(car.brand, car.model);

//re-assignment of let
let friends = 34;
friends = 39;
console.log(friends);

//dynamic typing
let x = 2323;
console.log(x);

x = "xyz";
console.log(x);

x = true;
console.log(x);

//type coercion
let result = 5 + "2";
console.log(result);
console.log(typeof result);

//type conversion
let num1 = "42";
console.log(typeof num1); //string
let num2 = 8;
let numres = Number(num1) + num2;
console.log(typeof numres); //number
console.log(numres);

let decnum = 67.67;
let newnum = parseInt(decnum);
console.log(newnum);

newnum = 45;
parseFloat(newnum);
console.log(newnum);

//program that adds a number and a string and shows both implicit and explicit results.

let a = "33";
let b = 1;

let ab = a + b;
console.log("Type Coercion");
console.log(ab);
console.log("Type Conversion");
ab = Number(a) + b;
console.log(ab);

//Operators in Js

let p = 30;
let q = 10;

console.log(p + q);
console.log(p - q);
console.log(p / q);
console.log(p * q);
console.log(p % q);

if (p != q) {
  console.log("P is not equal to Q");
} else {
  console.log("P is equal to Q");
}

//Comparison

console.log("Is 5 == 5");
console.log(5 == "5");

console.log("Is 5 === 5");
console.log(5 === "5");

//condition using && and || to check age eligibility

if (age >= 13 && age <= 19) {
  document.write("<br>You're a teenager");
} else if (age > 1 || age <= 17) {
  document.write("<br>You're not an adult");
} else {
  document.write("<br>You're not a child");
}

//Array

const games = ["NFS", "CSGO", "RDR2"];
console.log(games);

//Simple Calculator

// let number1 = parseFloat(prompt("Enter the first number : "));
// let operator = prompt("Enter an operator (+, -, *, /) : ");
// let number2 = parseFloat(prompt("Enter the second number : "));

// let calcResult;

// if (operator === "+") {
//   result = number1 + number2;
// } else if (operator === "-") {
//   result = number1 - number2;
// } else if (operator === "*") {
//   result = number1 * number2;
// } else if (operator === "/") {
//   result = number1 / number2;
// } else {
//   result = "Invalid Input";
// }

// console.log(result);
// alert("Result Is - " + result);