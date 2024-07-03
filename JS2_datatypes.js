// 1st type is NUMBER
var myFavnum = 59;
console.log("The number is " + myFavnum);

//2nd type is  STRING
var myName = "Yash";
console.log("My name is "+ myName);

//3rd type is BOOLEAN
var isRaining = true;
console.log(isRaining);

//4th type is UNDEFINED
var yourName;
console.log(yourName);

//5th type is NULL
var badMemories = null;
console.log(badMemories);

//6th type is BIGINT
const bigNumber = 222222222222222222222222222222222n;
console.log(bigNumber);


//questiosn for the interview

//1. What is the difference between the Undefined and Null in the javasccript

//2. What is the purpose of typeof operator in javascript
//Lets see this question with the example
//So basically the use of typeof operator is to see what is the data type of value in the variable

var myNewName = "Yash Mashru";
console.log(myNewName);
console.log("The typeof the data defined here is " + typeof(myNewName));

//3. What is the result of 'typeof null' in javascript ?
//So this is the interesting one here, So basically typpeof null shold be null but it will provide as a object
//Lets see this with the example

var badMemories = null;
console.log(badMemories);
console.log(typeof badMemories);
//The typeof null will be object//      

//4. What are the primitive data types in JavaScript ?
//As we know there are 7 primitivee data types in the JavaScript and those are as follows;
// String, Number, Bollean, Undefined, Null, bigint, symbol

//5. Convert a string to the number
//We just need to add '+' sign before the string
///lets learn with the example

var newStrig = "10";
console.log(newStrig);
console.log(typeof +newStrig);
console.log(typeof Number(newStrig));
//Number here is the constructor in the JAVASCRIPT

//6. Convert a Number to String

let str = 5;
console.log(str);
console.log(typeof str);
console.log(typeof String(str));
console.log(typeof (str + ""));

//7. Explain the concept of the truthy and falsy values in the javascript
// True
// Aany non empty string, any non-zero number, array, and objects even if they are not empty
//false, 0(Zero value), ''(an empty String), null, undefined, NaN(Not a Number)
// Lets see this one with the example here

//To check  if a non-empty string is a truthy or falsy we have written an example
var helloWorld = "Yash";
if(helloWorld){
    console.log("This is the true value");
}else{
    console.log("This is the false value");
}

//Lets lern about parseInt and parseFloat

//parseInt is the functionwhich is used to convert a string into an integer(i.e Whole number)

const myString1 = "42";
const myNumber1 = parseInt(myString1);
console.log(myNumber1);

const myString2 = "42.5";
const myNumber2 = parseInt(myString2);
console.log(myNumber2);//As we see here the parseInt converts the string into the whole number.

//parseFloat is also Function which is userd to convert the string into the floating number which can contain the decimal numbers also

const myString3 = "42.5";
const myNumber3 = parseFloat(myString3);
console.log(myNumber3);

//Few more examples for the parseInt and the parseFloat

console.log(parseInt("123"));
//This will  print  123
console.log(parseInt('123', 10));
//This will also print 123
console.log(parseInt("   123"));
//Here this will ignore the space before the numbers and outputt will be 123
console.log(parseInt("077"));
console.log(parseFloat("077"));
//Here this will ignore the 0 which is written before the 77 and output will be only 77
console.log(parseInt("1.9"));
console.log(parseFloat("1.9"));
//Here this will conver this number to whole number and give the output as the 1

//When ww will not get an output
//basically here in these examples it'll return as a NaN i.e Not a Number

console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));

//What is the purpose of the NaN in the JavaScript ?
//Let's say we have passed some values into the parseInt that is not
//a number, so there should be something that can say that this is not the number. So that's why NaN is used
//When a mathemetical operation doesn't yeilds a valid number NaN is returned

//Also, to check whether a value is number or not we can use isNaN() function
console.log(isNaN('xyz'));
console.log(isNaN('12'));

// NaN == NaN, why is it false ?

if(NaN == NaN){
    console.log("both are qual");
}else{
    console.log("not equal");
}

//NaN is not qual to NaN 
//Lets see why here
console.log(parseInt("Yash"));
console.log(parseInt("%$&"));

//See here we got the NaN values here but both NaN are from the different Values so that is the reason why
//NaN is Not qual to NaN;






