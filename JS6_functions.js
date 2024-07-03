//Functions in JavaScript

//? In JavaScript, a function is a block of reusable code that performs a specific
//task or set of tasks. Functions are used to organize code into modular and manageable pieces,
//promote code reuse, and make programs more readable.

//3 students at a same time wants to find the sum of two numbers

//1st student
var a = 5,
  b = 10;
var sum1 = a + b;
console.log(sum1);

//2nd student
var a = 15,
  b = 15;
var sum2 = a + b;
console.log(sum2);

//3rd student
var a = 5,
  b = 30;
var sum3 = a + b;
console.log(sum3);

//Lets make reuseable code
//This is the optimized way to write a code in JS, so that we dont have to write too many lines
//of code. we can simpyl write a program for one time and can access that as many times as we want
function sum(a, b) {
  //Her a and b are the parameters
  return a + b;
}

//here a and b are the reuseable variables
//1st student
console.log(sum(5, 5)); // here we are calling a function and adding a values here.
//2nd
console.log(sum(50, 50));
//3rd
console.log(sum(20, 50)); //here 20,50 are the function arguments

function greet() {
  console.log("Hello World!");
}

greet(); //to print the values we can also directly call the function name. This is called the
//Function invocation

//! 1. Write a function to find the sum of two numbers.
function sumOfTwoNumbers() {
  //This is called function declaration.
  var a = 5,
    b = 10;
  console.log(a + b);
}

sumOfTwoNumbers(); //This is called function invocation

//Some Questions

//Let's say we want to greet students with one same line
//Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa
//Technical JS Course. The function should take a name parameter and output the message
//"Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the
//argument "vinod" and once with the argument "ram".
function greet1(userName) {
  console.log("Welcome to JavsScript Functions " + userName);
}

greet1("Yash");
greet1("Ram");

//Write a function to find the sum of two numbers with parameters.
function sumofTwoDigits(c, d) {
  console.log(c + d);
}

sumofTwoDigits(3, 5);

//function expression
//we can assing function to other variables or conts. so basically now if we want the result
//we will have to call the variable not the function name.
//Lets see the example for this one

var result = function niceSum(g, f) {
  console.log(g + f);
};

// niceSum(2,4); //here we cant call the function like now instead we have to call it as follows.
result(2, 5); //So this procedure is called the function expression.

//Annonymous functions
//Basically annonymous functions is the funciton without the function name. here we can call
//the variable so there is no need for the function name.
var result5 = function (j, k) {
  console.log(j + k);
};

result5(5, 6);

//return keyword
function sum10(a, b) {
  // console.log(a+b);//if we write like this the output will give up undefined everytime because we are only printing this
  //on a console. so to overcome this we write retunn instead.
  return a + b; //After writing return it'll return the values. before it was just printing to console but now its returning the value for futhure use
  console.log("Hello World!!"); // Whatever we write after return it'll never run because the function will come out after the retur.
}

// also we can use this function in other ways like below
var result10 = sum(5, 5); // so basically we can use the  ablove function to anything. and we can store the value inside other variables for furture uses.
console.log(result10);

// console.log(sum10(5,6));
// console.log(sum10(5,6));
// console.log(sum10(5,6));

//IIFE: Immidiately invoked function expression
//Basically this is the way of writing a function which will be executed directly after its
//creation. whenever we will load the page it will be executed directly.
//to create a IIFE we just have to put the function inside a '()'.
//Lets see the example of this.
//The example shown below is the final example of the Immidiately invoked function expression.
var result8 = (function (a, b) {
  console.log(a + b); //if we just have the console.log it will show output as a undefined
  return a + b; //so to get the output we have to use the keyword return.
})(5, 10);

console.log("The sum of the twonn numbers is " + result8);

//Interview Questions.

//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as
// parameters and returns the result of the operation. The function should support addition,
// subtraction, multiplication, and division.
const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      result = num1 - num2;
      return result;

    case "*":
      return num1 * num2;

    case "/":
      if (num1 === 0) {
        console.log("The Values 0 is no allowes!");
      } else {
        return num1 / num2;
      }
    default:
      return "No operator found";
  }
};
console.log(calculator(5, 2, "+"));
console.log(calculator(5, 2, "-"));
console.log(calculator(5, 2, "*"));
console.log(calculator(10, 2, "/"));
console.log(calculator(5, 2));

//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.
const isReverse = (str) => {
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    //Whenever we write str.length it counts as a str.length + 1. so if we put like
    //   'char = str.length' we will get  one value as a undefined to clear that we have to
    //    wrtie 'str.lenght - 1'.
    reverse = reverse + str[char];
  }
  return reverse;
};

console.log(isReverse("Yash Mashru"));

// let str1 = "Yash Mashru";
// console.log(str1[3]);
//This gives you the value at the 4rd index in the string.and the index starts from 0,1,2,3
//SO basically here at 3rd index we have 'h'.So this will give output as 'h'.

//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome
// (reads the same backward as forward).
//Palindrome is a word whihc is same as backwards. like radar.

const ispalindrome = (str) => {
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    //Whenever we write str.length it counts as a str.length + 1. so if we put like
    //   'char = str.length' we will get  one value as a undefined to clear that we have to
    //    wrtie 'str.lenght - 1'.
    reverse = reverse + str[char];
  }
  // if(str === reverse){
  //     return true;
  // }
  // else {
  //     return false;
  // }
  // we can easily optimise this code by just using the below code.
  return str === reverse ? true : false;
};

console.log(ispalindrome("radar"));
