//*Arrays
//*JavaScript arrays is an object that represents collection of similar type of elements.

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//!Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric
//keys (indices) and a length property. The indices are automatically maintained, and the
//length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and
// regular objects.

//Index Number   0   1   2   3   4   5   6
//Const person = a   b   c   d   e   f   g

const persons = ["a", "b", "c", "d", "e"];
console.log(typeof persons);
//The type  of array is objec.
console.log(persons.length);
//Here we willl get the output as a 5 because the length of array is 5
console.log(persons.length - 1);
//But if we want the indexes we have to do this and that is "perons.length-1".
console.log(persons.at(-1));
//This .at() method is useful to index the last elements off arrays eaily.
console.log(persons[-1]);
//If we use traditional method it will give as undefined.
console.log(persons.at(-4));

//* creating an array

//? using Array constructor
let fruites = new Array("apples", "oranges", "mango");
console.log(fruites);

//? using array literals
let fruites1 = ["apples", "oranges", "mango"];
console.log(fruites1);

//? we can also create an empty array
let arr = [];

//*Accessiong Elements

//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
let fruites2 = ["apples", "oranges", "mango", 1];
console.log(fruites2[3]);
// console.log(fruites2["apples"]);//This will never happen and gives you undefined.
console.log(typeof fruites2[3]); //We can check the type of any element of array using this

//*Modifying elements

//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let bikes = ["Himalyan", "classic-350", "GT-650"];
// bikes[2] = "GT-Continental";
// console.log(bikes);

//* Array Traversal / iterating over arrays

let bikes = [
  "Himalyan",
  "classic-350",
  "GT-650",
  "GT-Continetal",
  "Humter-350",
];

//? for of loop, also know as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object,
//* such as arrays, strings, or other iterable objects.
//* We can say that, This is simplified version of for loop for arrays.

for (let item of bikes) {
  console.log(item);
}

//Here is the only for loop but "For of loop" is more reliable for arrays.
// for(let item = 0; item < bikes.length; item++){
//     console.log(bikes[item]);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices)
//* of an object.
//* Here in for in loop "in" is index.
//* And here we are using loop for the index numbers of the array.

for (let item in bikes) {
  console.log(item);
}

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array.
//* The provided function may perform any kind of operation on the elements of the given array.

//This is using traditional function method
// bikes.forEach(function
//     callback(curElem, index, arr){
//         console.log(`${curElem} ${index}`);
//     }
// )

//This is usin the fat arrow function
//Here we are getting output as a currentElement and its index like
//Himalyan 0
//classic-350 1
//GT-650 2

// bikes.map((curElem, index, arr) => {
//     console.log(`${curElem} ${index}`);
//     console.log(arr);
// })

const myForEachBikes = bikes.forEach((curElem, index, arr) => {
  return `${curElem} ${index}`;
  // console.log(arr);
});

console.log(myForEachBikes);
//! Here we learned something that when we store this forEach into some variable and when we call
//! This we will get output as a undefined. SO this is the disadvantage of the forEach loop
//! But the advanage is that when we are creating some websites we have to get some data from the
//! user but we dont want to do anything with that data and we just want to print that data we can
//! use forEach loop.

// ? 4: map function
//* map() creates a new array from calling a function for every array element.
//* map() does not change the original array.

bikes.map((curElem, index, arr) => {
  console.log(`${curElem} ${index}`);
  // console.log(arr);
});

const arrForEach = bikes.map((curElem, index, arr) => {
  return `My favourite bike is ${curElem}`;
});

console.log(arrForEach);
console.log(bikes);
//Now we know that if we want to create a new array using the original we can use map function
//Here we have called both the arrays new one and old one. so there will be no change in old
//one but we have created the new array using the old one.
//! Not like in the forEach method, here when we call the variable "map" function will create
//! an new array with the values and it'll return that.

// todo Practice Questions
//! write a program to Multiply each element with 2
//! forEach -  Performs an action on each element
//! map -  Creates a new array with transformed elements

const numbers = [1, 2, 3, 4, 5];

//*using forEach
numbers.forEach((curElem) => {
  console.log(curElem * 2);
  // Performs an action on each element
});

//*using map
const doubleNumbers = numbers.map((curElem) => {
  return `${curElem * 2}`;
  // Creates a new array with transformed elements
});
console.log(doubleNumbers);

//* Key Differences
//! Return Value:
//? forEach: It doesn't return a value. The forEach method is used for iterating over the
//? elements of an array and performing a side effect, such as modifying the array or
//? performing a task for each element.

//? map: It returns a new array containing the results of applying a function to each
//? element in the original array. The original array remains unchanged.

//! Chaining:
//? forEach: It doesn't return a value, so it cannot be directly chained with other array
//? methods. (Basically when you want to perform another task using the result that you have
//? got from first, it's not possible. Because forEach method doesn't returns any value.)

//? map: Since it returns a new array, you can chain other array methods after using map.
//? (But here we can perform another task to the result array. because this methid will return
//? the values and we can perform anything to that values)

//* Use Case:
//? forEach: Used when you want to iterate over the array elements and perform an action on
//? each element, but you don't need a new array.

//? map: Used when you want to create a new array based on the transformation of each element
//? in the original array.

//* How to Insert, Add, Replace and delete Elements in Array(CRUD) - p1
let bikes1 = [
  "Himalyan",
  "classic-350",
  "GT-650",
  "GT-Continetal",
  "Humter-350",
];

//? 1: push(): Method that adds one or more elements to the end of an array.
//! The push() method returns the new length of the array
console.log(bikes1.push("Hunter"));
console.log(bikes1);

//? 2: pop(): Method that removes the last element from an array.
//! The pop() method returns the deleted value inn this case Hunter
console.log(bikes1.pop());
console.log(bikes1);

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
console.log(bikes1.unshift("Hunter"));
console.log(bikes1);

//? 4: shift(): Method that removes the first element from an array.
console.log(bikes1.shift());
console.log(bikes1);

//*  what if, we want to add or remove anywhere in an elements - p2

//? The splice() method of Array instances changes the contents of an array by removing
//? or replacing existing elements and/or adding new elements in place.
//syntax
// splice(startIndex, deletecount, item1, item2, item3, ...., itemN)
console.log(bikes.splice()); //Here it gives empty array
// bikes.splice(1, 1);//Here we are deleting ''classic-350 from the array.
bikes.splice(1, 1, "Bullet"); //Here we are deleting 'Classic-350' and adding 'bullet' instead of that
console.log(bikes);

//! What if we want to add the element at the end
// bikes.splice(-1,0,"Old-Bulllet");//This will not add the data at the end
bikes.splice(bikes.length, 0, "Old-Bullet"); //But this will add data at the end.
bikes.splice(1, 0, "ShotGun-650"); //Basically here we are adding a data without deleting anythin.
console.log(bikes);

//* Searching in an array
//?Searching and filter in an array

//? For Search we have - indexOf, lastIndexOf & includes

const numbers1 = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the index at which a given element can be found in the array, or -1 if it is not present.
//? Syntax: numbers.indexOf(searchElement, fromIndex)
console.log(`The indes of 8 is ${numbers1.indexOf(8, 2)}`); //here the index of 8 is originally 9 but we have written another parameter and that is fromIndex, so now the index will be count from the number 2, so it will become 8.
console.log(numbers1.includes(9));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element(The elements which are same only) can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
console.log(numbers1.lastIndexOf(6)); //Here output will be index number 6 because it returs the indes of last value present in the array, here there are two 6 so this method will take the last 6 and will return its index.
console.log(numbers1.lastIndexOf(6, 4)); //Here the output will be 4 because the starting index that we have given is 4 and at the index 4 we have value 6, so the output will be 4.

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
console.log(numbers1.includes(9));

//todo Challenge time
//? 1: Add Dec at the end of an array?
//? 2: What is the return value of splice method?
//? 3: Update march to March (update)?
//? 4: Delete June from an array?

const months = ["Jan", "march", "April", "June", "July"];
// 1:
// months.push("Dec");
months.splice(months.length, 0, "Dec");
console.log(months);
// 2: it returns an empty array.
// 3:
const indexToUpdate = months.indexOf("march");
months.splice(indexToUpdate, 1, "March");
console.log(months);
//4:
const indexToDelete = months.indexOf("June");
months.splice(indexToDelete, 1);
console.log(months);

//*  Filter in an Array

const numbers2 = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

const results3 = numbers2.find((curElem) => {
  return curElem > 7; //Basically this method gives output as a first element that satisfies tht logic.
});
console.log(results3);
// console.log(typeof(results3));

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result4 = numbers3.map((curElem) => curElem * 5); //Here we are creating a new array using the numbers3.
console.log(result4); //result4 is the new array.

const result5 = result4.findIndex((curElem) => {
  return curElem > 10; //Basically it returns the index of the first element that satisfies the function.So here 15 is at the index 2 so thats why we are getting 2 as an ouutput. BEcause is the first element after the condition that we have fiven here.
});
console.log(result5);

//*IMP
//? 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
const result6 = numbers2.filter((curElem) => {
  return curElem > 4; //Here what is done is that new array will be created which satisfies the condition. so the new array will contani all the elements that are greater than 4.
});
console.log(result6);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
let value = 6;
const numbers4 = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

const updatedCart = numbers4.filter((curElem) => {
  return curElem !== value; //So  basically here we will get the new array
});

console.log(updatedCart);

//!Extra : To remove duplicates using the forEach method, This is for tthe practice.
// let arr4 = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(){
// let unique = [];//creating new empty array
// arr4.forEach((curElem) =>{
//     if(!unique.includes(curElem)){ //Here is the useful logic to understand
//         unique.push(curElem);
//     }
// })
// return unique;
// }

// console.log(removeDuplicates(arr4));
// console.log(arr4);

// !Example 2: Filtering Products by Price
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];
// Filter products with a price less than or equal to 500

const filterProducts = products.filter((curElem) => {
  // console.log(curElem.price);
  console.log(curElem <= 500); //This only gives output as a true or false.
  return curElem.price <= 500;
});
console.log(filterProducts);

// //! Filter unique values
const numbers7 = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

let uniqueValues = numbers7.filter((curElem, index, arr) => {
  // console.log(index);
  // console.log(arr.indexOf(curElem));
  return arr.indexOf(curElem) === index;
  //here we are returning the values that has the same index values.
  // console.log([ ... new Set(numbers7)]);//Here we are using spread operator.
});
//In this problem we have to filter the uniqu values so firat we check that what are the indexes of the elements present in the array. So that will give us as 0,1,2,3,4,5,6,7,8,9. But if we find the index of each element using arr.indexOf(curElem) method we will get 0,1,2,3,4,5,4,7,8,9. here we have seen that the number 6 that comes that two times are given the same index. so from this we got that 6 is the value.

console.log(uniqueValues);

//*  How to Sort and Compare an Array
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

const fruits = ["Banana", "Apple", "Orange", "Mango"];
const numbers5 = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];

fruits.sort();
console.log(fruits);

// numbers5.sort();
// console.log(numbers5);

//? compare callback function
// syntax
// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1  => switch the order
// if(b>a) return -1  => keep the order

numbers5.sort((a, b) => {
  //for ascending order
  // if (a > b) return 1;//continue the order
  // if (b > a) return -1;//Swich the order

  //for decending order
  if (a > b) return -1; //Swich the order
  if (b > a) return 1; //continue the order
});
console.log(numbers5);

//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
// });

//? For descending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });

//*  Very Important Array Methods
//? Map(), Filter(), Reduce(),

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
const numbers6 = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
const squares = numbers6.map((curElem) => {
  return curElem * curElem;
});
console.log(squares);

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
const words = ["APPLE", "banana", "cherry", "date"];
const newWords = words.map((curElem) => {
  return curElem.toUpperCase(); //Here toUpperCase is a string method
});
console.log(newWords);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

const numbers8 = [1, 2, 3, 4, 5];

const squaresOfnumber = numbers8
  .map((curElem) => {
    if (curElem % 2 === 0) {
      return curElem * curElem;
    }
  })
  .filter((curElem) => curElem !== undefined); //Here we are using the chaining conccept that can be used in the map method. SO we can simply filter the values that we dont want.Here we dont want undefined in our new arrray so thats why we are using the filter method and telling the dunction that in the new array curElem should not be equal to "undefined".
console.log(squaresOfnumber);

//This is also the valid way to write the code for the given problem, here we are using the ternary operator to write the code.
const evenSquares = numbers8
  .map((curElem) => (curElem % 2 === 0 ? curElem * curElem : undefined))
  .filter((curElem) => curElem !== undefined); //Here we dont want undefined in our new arrray so thats why we are using the filter method and telling the dunction that in the new array curElem should not be equal to "undefined".
console.log(evenSquares);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".
const names = ["ram", "vinod", "laxman"];
const newNames = names.map((curName) => `Mr. ${curName}`);
console.log(newNames);

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.

// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
// Your logic here
// Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.Basically the result of previous iteration as we saw inn the below example
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

//! Calculate the total price using the reduce method.
const productPrice = [100, 200, 300, 400, 500];

const totalPrice = productPrice.reduce((accum, curElem) => {
  return accum + curElem;
}, 0); //Basically the value of accumulator in the starting is 0, and with every iteration it goes on like first its 0, then 0 + 100 than 100 + 200 and then finally we will get the total value.

console.log(totalPrice);
