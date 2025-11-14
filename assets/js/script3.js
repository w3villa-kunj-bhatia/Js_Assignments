//Object Manipulation

//Create a student object with name, age, and grade

const student = {
  name: "Kunj",
  age: 23,
  grade: "A",
};

// Add a new property isPassed and delete grade

student.isPassed = true;
delete student.grade;

console.log(student);

//Access properties using both dot and bracket notation

//Dot notation

console.log(student.name);

//Bracket notation
console.log(student["age"]);

//Error Handling

//Wrap a JSON.parse() call inside try...catch

try {
  const data = JSON.parse('{"name": "Kunj"}');
  console.log("Parsed successfully:", data);
} catch (error) {
  console.error("Invalid JSON:", error.message);
}

// Create a function that throws an error if input is not a number

function checkNumber(value) {
  if (typeof value !== "number") {
    throw new Error("Input must be a number");
  }
  return value;
}

try {
  console.log(checkNumber(10));
  console.log(checkNumber("abc"));
} catch (error) {
  console.error("Error:", error.message);
}

// Log an error message gracefully in a catch block

try {
  let result = undefinedFunction(); // will throw
} catch (error) {
  console.error("Something went wrong:", error.message);
}
