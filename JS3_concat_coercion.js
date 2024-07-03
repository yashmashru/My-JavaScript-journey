//Concatination and coercion in JavaSccript

//Here in JS we use '+' sign for string concatination

const str = "Hello " + "World!";
console.log(str);

// Type coercion is the automatic conversion of "Values" from one data type to another.
//There are two types of coercion in JS, Implicit and Explicit, Implicit coercion happens automatically
//whil explicit coercion is done manually by the programmer.
//It can lead to unexpected results, so beaware of how JS handles these situations.

//Lets see some examples

let sum = "Yash" - 5;
console.log(sum);

let sum2 = "5" - 10;//implicit type coercion
console.log(sum2);

let sum3 = "5" + 10;//concatination happes also there is a part where coercion is also happening.
console.log(sum3);

//Few more examples
console.log(10 + "20");//output will be 1020 //concatination
console.log(9 - "5");//output will be 4 //coercion
console.log("Java" + "Script");//output will be JavaScript //concatination
console.log(" " + " ");//output will be two Spaces("  ") only //concatination
console.log(" " + 0);//output will be "space + 0"
let str5 = " " + 0;
console.log(typeof str5); //here we are adding 0 to the string so the out will be concat and the result will be the string, so the type of these data will be string
console.log("Yash" - "Mashru");//output will be NaN
console.log(true + true);//output will be 2 // Here in JS the value of true is 1 so that's why we are getting 1 + 1 =2 as a result
console.log(true + false);//output will be 1 // Because The value of false is 0 here, so output will be 1 + 0 =1
console.log(false + true);//output will be 1
console.log(false - true);//output will be -1

console.log(5 + "5");//here output will be 55
console.log(5 + + "5");//but here output will be 10 because (+"5") This will convert string to number so output will be 5 + 5 =10
//The abouve example is also important in JS
