//Here we will learn about the ECMASctipt from 2015
//we will learn abpuut changes that were made in 2015 that was calles ES6

//First we will learn about LET and CONST keywords which are used to devlare a variable

//let Keyword:  The let keyword is used to declare variables with block scope.
//Variables declared with let are mutable, meaning their values can be reassigned.

//const Keyword: The const keyword is used to declare variables with block scope, 
//but once a value is assigned to a const variable, it cannot be reassigned. const 
//variables are immutable.

//Now  lets see some examples for Let and Const

// var my_firstName = "Yash";
// my_firstName = "YashM";
// console.log(my_firstName);

// let my_firstName = "Yash";
// my_firstName = "YashM";
// console.log(my_firstName);

// const my_firstName = "Yash";
// my_firstName = "YashM";
// console.log(my_firstName);



//? Example with the help of var keyword 
// var name = "yash";
// if(true){
//     var name = "YashM"
//     console.log("name");
// }
// name = "YashMash"
// console.log(name);



//Example  with the help of let keyword
// let name = "yash";
// if(true){
//     let name = "YashM"
//     console.log(name);
// }
// let = "YashMash"
// console.log(name);



//with the help of const keyword
// const name = "yash";
// if(true){
//     const name = "YashM"
//     console.log("name");
// }
// name = "YashMash"
// console.log(name);



// Other example
//var
// if(true){
//     var name = "YashM"
//     console.log("name");
// }
// name = "YashMash"
// console.log(name);



//let 
//Here below we have seen the example using let keyword and what we have learned using this is
//Whenever we are using let keyword the variable is valid up to the block and that means it's valid 
//between the '{}'. outside that it cant be used are called.
// if(true){
//     let name = "YashM"
//     console.log(name);
// }
// name = "YashMash"
// console.log(name);//Here it'll show an error because let variable is only block scope so it cant be used outside the block.





//Template Strings(Template literals): 
//In ECMAScript 6 (ES6), template strings, also known as template literals,
//provide a convenient and flexible way to create strings in JavaScript. 
//Template strings are enclosed in backticks (``) rather than single or double quotes.

let firstName = "Yash";
let lastName = "Mashru";
// let fullName = firstName + lastName;//This was the old way to write the string concatination
let fullName = `${firstName} ${lastName}`;//This is the latest way to write the string concatination. which is used now
console.log(fullName);



//String Interpolation:  Template strings support string interpolation, allowing you to embed
//expressions directly within the string. Interpolated expressions are enclosed in ${}
let age = 29;
let message = `I am ${age} years old`
console.log(message);



//Multi-line Strings: Template strings make it easy to create multi-line strings
//without the need for concatenation or escape characters.
let multiLineString = `
This is a multiline
string using template literals.
It's much cleaner and easier read
`;
console.log(multiLineString);



//? Expression Evaluation: Template expressions can include any valid JavaScript expression.
//Example
let num = 5;
console.log("5 * " + num + " = " + 5 * num);//This was the old way to write the expressions
console.log(`5 * ${num} = ${5 * num}`);//This is the new way to write the expressions. And this is more convenient





//Default Arguments(Default parametes):
//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more
//  concise way to handle function parameter defaults. Default parameters allow you to 
//  specify default values for function parameters in the function declaration itself. 
//  If a parameter is not provided when the function is called, the default value is used.

//? Default function parameters allow named parameters to be initialized with default values
//  if no value or undefined is passed.


//Examples
//! Write a function to find sum of two numbers? What if during function call user only 
// passed one argument?
function sum(a = 5, b = 10){
    return a + b;
}
console.log(sum(5,10));
console.log(sum(5));// If we do something like this it'll give output as a NaN.// This only happens if none of the values were not predefined
console.log(sum(5));//Here we will get the output as a 15 because there were predefined value of b was there
console.log(sum(10,20));//Here we will get output as a 30 because we have defined both the values. The predefined values are taken if and only if one of the of the values are not called.





//Fat Arrow Function
//? In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, 
// were introduced as a concise way to write anonymous functions.

//examples
const sumofTwoDigits = function(a,b){
    let resuls = `The sum of ${a} and ${b} is ${a + b}`
    return resuls;
}
sumofTwoDigits(5,5);//This was the method used before..



//The method which is used nowadays.
const somofTwoNumbers = (a,b) => {
    let resuls = `The sum of ${a} and ${b} is ${a + b}`
    console.log(resuls);
}

const somefTwoNumbers = (a,b) => console.log(`The sum of ${a} and ${b} is ${a + b}`);
somofTwoNumbers(5,5);
//Here in above example we have seen that the if we have used method that we were using before
//we had to write a more code and also we need to return that othervise we won't be getting the
//output. but here in arrow function w ecan just simply write direct console.log and can print
//the valeus. It saves time also, and becomes easy. If we are writing just one line we dont even
//need to use '{}'.  we can directly write teh code.



// 1: If the function body consists of a single expression, the braces {} and the
//  return keyword can be omitted.
const sum5 = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum5(5, 5));



// 2: If there is only one parameter, the parentheses () around the parameter list 
// can be omitted.
const square = a => `The square of ${a} is ${a * a}`;
console.log(square(699));



// 3: If there are no parameters, use an empty set of parentheses ().
const greet = () => console.log("Hello and welcome to JavaScript");
greet();
