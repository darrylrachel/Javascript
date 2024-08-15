/*//////////////////////////////////////////////////////////////
                               DECISION MAKING
//////////////////////////////////////////////////////////////*/

// IF STATEMENT
// Only runs code if given condition is true

let rating = 3;
if ( rating === 3 ) {
  // run this code
}

let random = Math.random();
if ( random < 0.5 ) {
  console.log(`You're number is less than 0.5`);
  console.log(random);
}

// ELSE IF (only works in if statement)
// If not the first thing, maybe this other thing

let age = 36;
if ( age <= 35 ) {
  // run this code
} else if ( age === 36) {
  // then run this code
}

// ELSE (only works in if statement)
// If not the first thing, and not the second thing, then do this

let day = "Monday";
if ( day === "Monday" ) {
  // run this code
} else if ( day === "Friday") {
  // then run this code
} else {
  // If all else is false then run this code
}

// NESTING
// we can nest conditionals inside conditionals

let password = prompt("Please enter a new password");

// password must be 6+ characters
// password cannot contain any spaces

if (password.length >= 6) { // password must be 6+ characters
  if (password.indexOf(' ') !== -1) { // password cannot contain any spaces
    console.log(`Password cannot include spaces!`);
  } else {
    console.log(`Valid password`);
  }
} else {
  console.log(`Password too short`);
}


/*//////////////////////////////////////////////////////////////
                        TRUTHY AND FALSY VALUES

All JS values have an inherent trutheyness or falsyness about them

Falsy values:
  * False
  * 0
  * "" (empty string)
  * null
  * undefined
  * Nan

Everything else is truthy
//////////////////////////////////////////////////////////////*/

//Example
const userInput = prompt(`Enter something`);

if (userInput) {
  console.log(`Truthy`)
} else {
  console.log(`Falsy`)
}

// Will return 'Truthy' as long as userInput is not empty


/*//////////////////////////////////////////////////////////////
                                 ARRAYS (Data Structure)
* Creating & Updating
* Push - add to the end (Push)
* Pop - remove from the end (Pop)
* Shift - remove from the start (Shift)
* Unshift - add to the start (Unshift)
* Concat - merge arrays
* IndexOf - just like string.indexOf
* Includes - look for a value
* Slice - copies a portion on an array
* Splice - removes / replaces elements
* Sort - sorts an array
* join - creates a string from an array
* reverse - reverses an array


* Multi Dimentional Arrays

Allows you to group data together
Arrays are indexed start at 0
Length is always one greater than the maximum index
//////////////////////////////////////////////////////////////*/

// CREATING ARRAYS
////////////////////////////////

// To make an empty array
let emptyArray = [];

// An array of strings
let arrayOfStrings = ['Fe', 'Fi', 'Fo', 'Fum'];

// An array of numbers
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];

// A mixed array
let mixedArray = ['Hello', 2, 7, 'Monday'];

// Modifying an array
mixedArray[3] = 'Friday';

// Add item to end of an array
arrayOfNumbers.push(8);

// Remove item from end of an array by default, needs no parameters
arrayOfStrings.pop();

// Adds item to the start of an array
mixedArray.unshift(444);

// Removes item from the start of an array
arrayOfStrings.shift()

// Concating arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ['a', 'b', 'c', 'd', 'e', 'f']

// Checking to see if it includes something (true or false)
array3.includes('e');

// Retrieving the index
array3.indexOf('b');
// Expected output: 1

// Reverses an array, known as a destructive method because it will change the original array order
array3.reverse();
// Expected output: ['f', 'e', 'd', 'c', 'b', 'a']

// Copies a portion of an array
const animals1 = ['Cheetah', 'Lion', 'Hippo', 'Rhino', 'Elephant'];
console.log(animals.slice(2));
// Expected output: Array ['Hippo', 'Rhino', 'Elephant']

const animals2 = ['Cheetah', 'Lion', 'Hippo', 'Rhino', 'Elephant', 'Monkey', 'Eagle', 'Duck', 'Camel', 'Bison'];
console.log(animals.slice(2, 8)); // .slice(start, end) end is up to that index
// Expected output: Array ['Hippo', 'Rhino', 'Elephant', 'Monkey', 'Eagle', 'Duck']

// SYNTAX
////////////////
slice()
slice(start)
slice(start, end)

/*
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
*/

// Changes the contents of an array by removing or replacing existing elements and/or adding new elements
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1
console.log(months);
// Expected Output: Array ['Jan', 'Feb' 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// Expected Output: ['Jan', 'Feb' 'March', 'April', 'May']

// SYNTAX
/////////////////////
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)


// Multi-dimensional arrays
// nesting arrays inside of other arrays
/////////////////////////////////////////////////

const colors = [
  ['red', 'crimson'],
  ['orange', 'dark orange'],
  ['yellow', 'golden rod'],
  ['green', 'olive'],
  ['blue', 'navy blue'],
  ['purple', 'orchid']
];


/*//////////////////////////////////////////////////////////////
                            OBJECT LITERALS DATA STRUCTRE

Objects are collections oof properties
Properties are key-value pairs
We can access these properties using the keys                            
//////////////////////////////////////////////////////////////*/

const car = {
  Year: 2019,
  Make: 'Volkswagon',
  Model: 'Jetta',
  Color: 'Black',
  Tire: [1, 2, 3, 4]
}

console.log(car.Model);
// Expected Output: Jetta

// Modifying an Object
//////////////////////////////

// Updating an object
car.Color = 'Matte Blue';

// Adding to an object
car.Tire = [1, 2, 3, 4];
// Output: {Year: 2019, Make: 'Volkswagon', Model: 'Jetta', Color: 'Black', Tire: Array(4)}


/*//////////////////////////////////////////////////////////////
                                 LOOPS
                            Repeating code                                 

For Loop
Nested Loop
While Loop
For...Of Loop
Break keyword
Iterating Arrays
Iterating Objects

The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.



//////////////////////////////////////////////////////////////*/


// SYNTAX
//////////////////
for (initialExpression; condition; incrementExpression) {
  // code block to run as long as condition is true
}

/*//////////////////////////////////////////////////////////////
                           FOR LOOP BREAKDOWN

initialExpression:
Variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable. This expression may optionally declare new variables with var or let keywords.

condition:
An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. If the expression evaluates to false, execution exits the loop and goes to the first statement after the for construct.

This conditional test is optional. If omitted, the condition always evaluates to true.

incrementExpression:
An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.

statement:
A statement that is executed as long as the condition evaluates to true. You can use a block statement to execute multiple statements. To execute no statement within the loop, use an empty statement (;).

//////////////////////////////////////////////////////////////*/


for (let i = 0; i < 10; i++) {
  console.log(`I will understand loops!`);
}
// Output: Prints to the console 1o times

// Exercise
for (let i = 0; i < 50; i += 7) {
  console.log(i);
}
// Output: 0, 7, 14, 21, 28, 35, 42, 49

let str = "Hello World";
for (let i = 0; i < str.length; i++) {
  console.log(str);
}
// Output: Prints Hello World 11 times