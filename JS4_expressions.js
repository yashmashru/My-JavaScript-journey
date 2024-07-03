//Expression and operator in JS
//Expressions contains (5 + 5) Here 5 is operand and + is operator

//Types of operators in JS
// Assignment operator
// Arithmetic operator(Increment and decrement operators)
// Comparison operator
// Logical operator
// String operator
// Unary operator
// Ternary operator(conditional)
// Type operators

// 1. Assignment operator: are the symbols which are used to assign values to variables. They take the
// Values to the right side of the operator and assign it to the left side of the operator.
var myNewCode = 14;
var myName = "Yash Mashru";
//Here = is the assignment operator

//2.Arithmetic operator : performs basics mathemetical operation on variables or values.
//This includes addition, multiplication, suubtraction, division and modulus
// '+'
var x = 5;
var y = 10;
var sum = x + y;
console.log(sum);
// '-'
var a = 10;
var b = 7;
console.log(a - b);
//'*'
var c = 2;
var d = 2;
console.log(2*2);
//'/'
var e = 10;
var f = 5;
console.log(e / f);
//'%'
var g = 17;
var h = 5;
console.log(g % h);

//Lets see some question for arithmetic operators
var result = "hello" / 2;
console.log(result);//here output will be NaN because String cant be devided by number

var result2 = 0.1 + 0.2;//outpput here will be like 0.3000000000000000004 which is because of the numbers are converted to binary for machine to understand and becaus of that this happens
console.log(result2.toFixed(2));// toFixed is a method which is used to select how many numbers we want after decimal

var result3 = 55 * "hello";
console.log(result3);//here output will be NaN because numers cant be multiplied to strings

//3. String Operator: There are few ways to concatenate string in JS. The Most common way in JS is
//to use the '+' operator.
//Example
var str1 = "Hello "
var str2 = "World !"
console.log(str1 + str2);

//Lets see some questions realated to string operator
console.log("5" + 3);

//4. comparison operator: in JS they are used to compare values and return bollean resuls(True or False)
// '=='
console.log(5 == 5);
console.log(5 == '5');//here output willl be true but it is not correct  so to overcome this === is used
//in this example it compares only values and does not sees that the datatypes are different.
// '==='
console.log(5 === '5');
// '(!=)'
console.log(5 != 5);
//'>'
console.log(5 > 3);
console.log(5 > "Yash");//here reference error will be thrown and it will show that Yash is not defined
//'<' 
console.log(3 < 2);
//'>='
console.log(10 >= 10);
//'<='
console.log(5 <= 5);

//Lets see some questions
//1. What is the difference between == and === in JS?
//The equality == operator is a comparison operator that compares two values and return
//true if they are equal. The Strict equality operator === is also comparison operator,
//but it compares two values and returns true only if they are qual and of the same type.

var A = 1;
var B = "1";

if(A === B){
    console.log('equal');
}else{
    console.log("not equal");
}

//5.Logical operator : There are three main logical operator: &&(AND), ||(OR) and !(NOT).
//&&(AND): returns true of both operands are true, outherwise false.
var x = 5;
var y = 10;
console.log(x > 0 && y < 20);
// ||(OR): returns true if one of the operand is true, othervise false
var d = 15;
var e = 0;
console.log(d > 10 || e > 10 );
// !(NOT): returns true if the operand is false and false if the operand is true
var h = 30;
var g = 30;
console.log(h != g);
var isOpen = false;
console.log(!isOpen);

//Q: Write a program that determines if a person is eligible to drive based on
//their age being greater than or equal to 18 and having a valid driver's license❓

var age  = 18;
var hadDrivingLicense = true; 
console.log(age >= 18 && hadDrivingLicense);
if(age >= 18 && hadDrivingLicense){
    console.log("eligible");
}else{
    console.log("not eligible");
}

//6. Ternary operator: syntax for ternary operator is
//condition ? expressionIfTrue : expressionIf False

// ! write a program to check if the candidates isEligibleToDrive or not? Age must be equal to or greater then 18.
var age1 =15;
var result1 = age1 >= 18 ? 'Yes' : 'No';
console.log(result1);

//! Q: Let's say you have a variable score representing a student's exam score. 
//If the score is greater than or equal to 60, the student passes; otherwise, they fail. 
//Use the conditional (ternary) operator to determine the result and store it in 
//a variable called result. Log the result to the console❓

var score = 30;
var result2 = score >= 60 ? 'Pass' : 'Fail';
console.log(result2);

//Extra questions

console.log(typeof("5" - 3));//output will be 2 and type will be number
console.log(2 < 12 < 5);//output will be True;(Explanation in the book)
console.log("20" + 10 + 10);//output will be 201010(Explanation in the book)







