
//VARIABLES
let firstName = "Happiness";
let age1 = 32;

//DATA TYPES
let name = "Alice";       // String
let age = 25;             // Number
let isStudent = true;     // Boolean
let grade = null;         // Null
let city;                 // Undefined

let a = 10;
let b = 5;

//Operators
console.log(a + b);       
console.log(a * b);       
console.log(a > b);   

// If/ELSE STATEMENT
let age2 = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//CAPTURING USER INPUT
let userName = prompt("What is your name?");
console.log("Hello, " + userName + "!");

//Output to Web Page (DOM)
  let number = prompt("Enter a number:");
  let resultText = "";

  if (number % 2 == 0) {
    resultText = number + " is even.";
  } else {
    resultText = number + " is odd.";
  }

  document.getElementById("result").textContent = resultText;

  

