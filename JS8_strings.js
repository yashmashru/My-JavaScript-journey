//* String in JavaScript
//? Strings in JavaScript are a fundamental data type that represents a sequence of characters. 

// Note:
//? Strings created with single or double quotes works the same.
// There is no difference between the two.

//* String Properties:
//? length: Property that returns the length of the string (number of characters).
const str = "Hello, World!"
console.log(str.length);
//Includes spaces and all

//* Escape Character
//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

let text = "My Name is 'Yash Mashru' &\nI will be the \"best WebDeveloper\" by \\2025";
console.log(text);



//? 2: String Search Methods
//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text1 = "Yash Mashru";
console.log(text1.indexOf("Mashru"));// Here it will return the index as a 5 because this method returns the index of first occurance of a string. So our first occurance is M and the index of M is 5, so the result will be 5.
console.log(text1.indexOf("mashru"));//Here we will get output as a -1 because indexOf is a case sensitive so basically this string doesnot exists.SO it will return -1.

let strArr = Array.from(text1);
//Here Array.from() is a method to convert the string to the array.
let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
console.log(strMap);



//? b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let text2 = "Hello JavaScript, welcome to our world best JavaScript course";
// let index = text2.indexOf("JavaScript");//Here we are getting a index of J as 6.
// let index = text2.lastIndexOf("JavaScript");//But here we are getting a  last index of J as a 44 becaise this method returns the last occurance of a specified text.
let index = text2.lastIndexOf("JavaScript", 40);//here we are getting an output as a 6 because when we provide a position from which we have to get the index it searches the backwards just like in the array.
console.log(index);



//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//Returns the index number where the first match is found. Returns -1 if no match is found.
let text3 = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text3.search(/Javascript/i);
// '/JavaScript/' This is a regular expression so we can also search using this.'/JavaScript/g', here g means globally(Means in all the Strings that matches).But we will ge the index of first That we found so output will be 6.
//Now '/Javascript/i', here we are using i that means we are ignoring all the conditions and we want the word only we dont check if  there ois a uppercase or lowercase.
console.log(result);

//*👉 Important Tips
// The search() method cannot take a second start position argument. That means we cant take the second argument like we cant search  from the index 20 for eg.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value



//? match() : Returns an array of the matched values or null if no match is found.
let text4 = "Hello JavaScript, welcome to our world best JavaScript course";

// let result2 = text4.match("Javascript")//Here it will give a result as a Null.

// let result2 = text4.match("JavaScript")//Here we willl get an output as a array with the index number the total input text.

//!here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag

let result2 = text4.match(/javascript/gi)//Basically here when we add g & i it becomes more useful and when we only and g it will return all the same element in a new array and when we use g & i together it will return the same words from the text..and it will ignore the uppercase and lowercase and will just return the same words. SO THE OUTPUT WILL BE  ['JavaScript', 'JavScript'].

console.log(result2);


//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
