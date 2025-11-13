// Day 2

//Control Structures

//Create a program that checks if a number is positive, negative, or zero

let num = -15;

if (num < 0) {
  console.log("Number is negative");
} else if (num == 0) {
  console.log("Number is zero");
} else {
  console.log("Number is positive");
}

//Print numbers from 1 to 10 using different loops.

console.log("For Loop");
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

console.log("While Loop");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("Do-While Loop");
let n = 1;

do {
  console.log(n);
  n++;
} while (n <= 10);

//Use switch to log the day of the week based on a number.

let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

function add(a, b) {
  return a + b;
}
console.log("Addition Function Result " + add(14, 36));

const addition = (a, b) => a + b;
console.log("Arrow Function Result " + addition(15, 34));

let cars = ["Ferrari", "BMW", "Cadillac", "Aston Martin"];
for (let car of cars) {
  console.log(cars);
}

cars.forEach(function (car) {
  console.log(car);
});

console.log(cars.toString());

//Closure

function outer() {
  let name = "Kunj";

  function inner() {
    console.log("Hello " + name);
  }

  return inner;
}

const greet = outer();
greet();

// Arrays

//Basic operations

const arr = [10, 20, 30, 40];

console.log(arr[0]);

console.log(arr.length);

arr.push(50);

console.log(arr);

arr.pop();

console.log(arr);

arr.unshift(0);

console.log(arr);

arr.shift();

console.log(arr);

console.log("Does above array include 20? " + arr.includes(20));

//map() to multiply all values in an array by 2.
console.log(arr.map((arr) => arr * 2));

//filter() to get even numbers from an array.
let arr1 = [23, 42, 18, 71, 67];

console.log(arr1.filter((arr) => arr % 2 == 0));

console.log(arr[arr1.length - 1]);

arr1[0] = 24;

console.log(arr1);

//Strings

//Extract a substring from a full name.

let s1 = "Kunj Bhatia";
let s2 = s1.slice(0, 4);

console.log(s2);

//Replace a word in a sentence and log the result.

let sentence = "Aston Martin DB7 was used in a war movie";

let part = sentence.replace("war", "bond");

console.log(part);

//Using template literals to construct a greeting message.
let username = "Crow";
let sentence2 = `Hello ${username}, welcome to W3villa`; //this is backtick not single quote

console.log(sentence2);