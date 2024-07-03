//1: If ... Else statement

//Lets check the temperature
//if else
var temperature = 15;
if (temperature >= 30) {
  console.log("Let's go to the beach!!");
} else if (temperature >= 20 && temperature < 30) {
  //if..else..if..else
  console.log("Stay Home and watch TV!!");
} else {
  console.log("Don't go out at all");
}

//Questions

/* If the person is 18 years or older, a citizen, and registered to vote, 
display a message saying they are eligible to vote.

 If the person is younger than 18, not a citizen, or not registered to vote, 
 display a message saying they are not eligible to vote.

 If the person is 18 or older but not a citizen, 
 display a message saying they are not eligible due to citizenship status.

 Extended voting eligibility checker with additional conditions
 If the person is 18 or older, a citizen, but not registered to vote, 
 display a message saying they are not eligible due to registration status.*/

// Assume the user's age, citizenship status, and registration status as inputs
// let userAge = 22;
// let isCitizen = true; // Assume true for citizen, false for non-citizen
// let isRegistered = false; // Assume false for not registered, true for registered
//! Check eligibility using if...else statements with multiple conditions

//This is the one way to write the output but we can optimize this while nesting the if else statements
//  var userAge = 22;
//  var isCitizen = true;
//  var isRegistered= false;

//  if(userAge >= 18 && isCitizen && isRegistered ){
//     console.log("Eligible to Vote");
//  }else if(userAge >= 18 && !isCitizen && !isRegistered){
//     console.log("Not Eligible to vote");
//  }else if(userAge >= 18 && !isCitizen){
//     console.log("Not Eligible due to citizenship status");
//  }else if(userAge >= 18 && isCitizen && !isRegistered){
//     console.log("Not Eligible due to registration status");
//  }else{
//     console.log("Not Eligible due to age");
//  }

//Other way to solve this will be
//This is the easy and optimized way to solve this question
//and you will learn to nested the statments one into another

var userAge = 18;
var isCitizen = true;
var isRegistered = true;

if (userAge >= 18) {
  if (isCitizen) {
    if (isRegistered) {
      console.log("Eligible to Vote");
    } else {
      console.log("Not Eligible due to registration status");
    }
  } else {
    console.log("Not eligible due to citizenship status");
  }
} else {
  console.log("Not eligible");
}

// Write a program to check if a number is even or odd.

var num = "6";
if (num % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd number");
}

//! 2: Write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//This can be done by For Loop

//In this solution there is a problem which is that , this result will show 2,3 and 5 as not a prime number
//but they are the prime numbers
// var numPrime = "2";
// if (numPrime % 2 === 0 || numPrime % 3 === 0 || numPrime % 5 === 0) {
//   console.log(numPrime + " is Not a prime Number");
// } else {
//   console.log(numPrime + " is Prime Number");
// }

//using this method we cant say perfectly that these numbers are prime or not so this
//is not the appropriate way to find the prime number.
// if(numPrime === 1, 2, 3, 5){
//     console.log("is Prime");
// }else(numPrime % 2 === 0 || numPrime % 3 === 0 || numPrime % 5 === 0){
//     console.log("is Not Prime");
// };

//Let's see the perfect way to write a program to check if the given number is  prime or not
//using FOR LOOP

var numPrime = 5;
var isPrime = true;

for(var p = 2; p < numPrime; p++){
    if(numPrime % p === 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log(numPrime + " is a " + "Prime Number");
}else{
    console.log("Not a Prime Number");
}


//Write a program to check if a number is positive, negative, or zero.

var numPNO = 12;
if (numPNO === 0) {
  console.log("The number is Zero");
} else if (numPNO > 0) {
  console.log("The Number is Positive");
} else {
  console.log("The Number is Negative");
}

//Now Let's see the SWITCH Statement
//! Explain how the switch statement works and what will be the output when the
// variable day is set to different values.
var day = "Friday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;

  case "Friday":
    console.log("Lets Party today");
    break;

  case "Sunday":
    console.log("Lets go for the movie");
    break;

  default:
    console.log("No conditions match");
}

//Question related to switch statement

//! Write a JavaScript switch statement that takes a variable areaOfShapes representing
// different shapes, and based on its value, calculates and logs the area of the corresponding
// shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b
// as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as
// the side length. If the provided shape is not recognized, log a message saying,
//  'Sorry the shape is not available.' Test your switch statement with areaOfShapes
//  set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct
//   area (25 in this case) is logged to the console.

var areaOfShapes = "circle";
var a = 5;
var b = 10;
var result5;
switch (areaOfShapes) {
  case "square":
    result5 = a * a;
    console.log(result5);
    break;

  case "rectangle":
    result5 = a * b;
    console.log(result5);
    break;

  case "circle":
    var r = 2;
    result5 = 3.142 * r * r;
    console.log(result5);
    break;

  default:
    console.log("No shapes matched");
    break;
}

//Explain tphe purpose of the code.
//What is it calculating based on the values of areaOfShapes, a, and b?
//Answer: The code calculates the area of shapes (rectangle, circlle, square) based
//on the values of the areaOfShapes variable;
//Here the in above  example areaOfShapes is variable and the values are written after case, so basically this 
//variable has the different valus here so we can easily perform any tasks.

//What will be the output if areaOfShapes is set to the "square" and why ?
//Ans: the output will be 25 because we have passed our variable into the switch statement and we have seen different
//different values of this variable, so when we hit run, it'll see that the first case matches, so it will give us output

//Why is there a break statement after every Case???
//Ans: because if the case matches then it'll break there and it won't run the other cases. So it will save 
//the time.

//if areaOfShapes is set to the "circle", what will be logged to the console, and why is the variable r is 
//defined within the case block??
//Ans: It'll logges the 12.568 and we have wrriten r in the case block because it doens have global scope in the 
//code where as a and b has the global scope in the program.

//What will happens if areaOfShapes is set to a shape that is not coverd by any of the existing case statements?
//So basically it will return the value that is logged into the default statement which is wrriten at the end of
//the switch statement

//How does the switch statement handles the flow of control based on the value of areaOfShapes ?
//Ans: Basically Switch statement runs the code from top to bottom, so first it will check the first case value,
//If it matches then it'll run that block of code and if it does'nt matches the value then it'll go to the value of 
//next case. and once it gets the value which is is lookig for it'll run that piece of code.So this is how the flows 
//works in the switch statement.



//Loops

// Initialization: Executed before the loop starts. Often used to initialize a counter variable.
// Condition: Evaluated before each iteration. If false, the loop terminates.
// Iteration: Executed after each iteration. Typically used to update the loop control variable.

//While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code
//as long as a specified condition remains true. The loop continues iterating while the condition is true,
//and it terminates when the condition becomes false.

//Simple while loop to count from 1 to 10
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

//let's create a table of 5

var numFive = 1;
while(numFive <= 10){
    console.log("5 * " + numFive + " = " + numFive * 5);
    // console.log(`5 * ${numFive} = ${5 * num}`);
    numFive++;
}
 





//Do...While Loop: A do...while loop in JavaScript is similar to a while loop, but it guarantees that the loop 
//body will be executed at least once before checking the loop condition. The loop continues to execute while the 
//specified condition is true, and it terminates when the condition becomes false.

//Common use cases: When you want to guarantee the execution of the loop body at least one time. Also When the number
//of iteration is not known  beforehead, and you want to validate the condition after the first iteratin

//Simple Do-while loop to count from 1 to 10\
var j = 1;
do{
    console.log(j);
    j++;
}while(j <=10);

//Eg: Validate Users Input with a Do...While loop(User need to write a valid number)
//This code can be only run in browser console. becuase it takes user input.
// let userInput;
// let positiveNumber;

// do{
//     userInput = prompt("Enter any valid Number: ");//prompt is used in JS to take a input from the user
//     positiveNumber = parseFloat(userInput);//Here we are just confirming if the user has enterd a floating number.
// }while(isNaN(positiveNumber) || positiveNumber < 0)//Here we are checking if user has not given a NaN value or negative value
// console.log("You Entered a valid positive number:", positiveNumber);//and finally we are printing the valid positive number.





//For Loop: A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a 
// block of code a specified number of times. It's particularly useful when you know the exact number of iterations 
// needed.

//* The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly 
// used when you want a loop to run indefinitely or until a break statement is encountered within the loop. 
// It's equivalent to while (true) {}.

// use case: Game Development:
// In game development, an infinite loop can be used to continuously update and render game frames 
// until a specific condition (e.g., game over) is met.

// for( ;; ){
//     //update game logic and renders a frames
// } 


//Simple for loop to count from 1 to 10
for(var k=1; k <= 10; k++){
    console.log(k);
}


//Practice Questions

//Calculate the sum of numbers from 1 to 10 using a for loop
var sum = 0;
debugger;
for(var c = 1; c <= 10; c++){
    var sum = sum + c;
}
console.log(sum);

//Generating a timetable of 5 with for loop.
for (var tableOfFive = 1; tableOfFive <= 10; tableOfFive ++){
    console.log("5 * " + tableOfFive + " = " + (tableOfFive * 5));
}
//JavaScript program to prine table for given numbers(8,9,12,15);
for (var tableOfEight = 1; tableOfEight <= 10; tableOfEight ++){
    console.log("8 * " + tableOfEight + " = " + (tableOfEight * 8));
}
for (var tableOfNine = 1; tableOfNine <= 10; tableOfNine ++){
    console.log("9 * " + tableOfNine + " = " + (tableOfNine * 9));
}
for (var tableOfTwelve = 1; tableOfTwelve <= 10; tableOfTwelve ++){
    console.log("12 * " + tableOfTwelve + " = " + (tableOfTwelve * 12));
}
for (var tableOfFifteen = 1; tableOfFifteen <= 10; tableOfFifteen ++){
    console.log("15 * " + tableOfFifteen + " = " + (tableOfFifteen * 15));
}

//Write a code to check if the given year is leap year or not
//condotions: 
//If a year is dicisible by 4 and not divisible by 100, or
//if a year os divisible by 400, then it is a leap year. otherwise it is not a leap year.
var year = 2004;

if((year % 4 === 0 && year % 100 !=0) || (year % 400 === 0)){
    console.log("The year " + year + " is Leap year");
}else{
    console.log("The year " + year + " not a leap year");
}

//Write a code for the pattern shown here
// * - - - - 
// * * - - - 
// * * * - -
// * * * * -
// * * * * *

for(var m = 1; m <= 5; m++){
    var pattern = "";
    for(var n = 1; n <= m; n++){
        pattern = pattern + "* "
    }
    console.log(pattern);
}

// for(var n = 4; n = 0 ; n --){
//     console.log(" ");
// }