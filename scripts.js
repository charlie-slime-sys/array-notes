
// organizing storing data is a foundational concept of programming

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn Kubernetes'];
newYearsResolutions[0] = 'Draw everyday';
newYearsResolutions[1] = 'Take an art class';
newYearsResolutions[2] = 'Maintain a healthy sleep schedule';
console.log(newYearsResolutions);


// Arrays are JS's way of list making , they store any data type, including strings, numbers, and booleans.
// Much like lists, arrays are ordered. Meaning, each item has a numbered position.

// CREATING ARRAYS

// // One way to create an array is to use an array literal. 
// These create an array by wrapping items in square brackets []
// From above, arrays can store any data type -- that holds all the same data types or it hold different data types

// each content item in an array is called an element
// each element are separated by COMMAS
// there are three different elements in an array 

const hobbies = ['art', 'music', 'writing'];
console.log(hobbies);

// Accessing array elements

// each element in an array has a numbered position known as its index.
// We can access individual items using their index, which is much similar to referencing an item in a list based on the item position. 
// Arrays in JS are zero-indexed, meaning the position starts counting from 0 rather than 1.
// The first item in an array will be at position 0

// using [] notation, the index after the name of the array is used to access the element.

// let cities = ['New York', 'Beijing', 'Nairobi'];
// cities[0]

let listItem = hobbies[0];
console.log(listItem);
let listLast = hobbies[hobbies.length-1];
console.log(listLast);

let seasons = ['Winter', 'Spring', 'Summer', 'Fall']
seasons[3]= 'Autumn';
console.log(seasons);

// variables declared with let can be reassigned, but variables with const, it cannot. 
//elements in an array declared with const remain mutable.
// ^ meaning, we can change the contents of a const array, but not reassign a new array.

// practice underneath

let condiments = ['Ketchup', 'Mustard', 'Relish'];
condiments[0] = 'Mayo';
console.log(condiments);

const utensils = ['fork', 'spoon', 'knife'];
utensils[2] = 'spork';
console.log(utensils);

// arrays built in property is length, and it returns the number of items in an array. We access .length like we do with strings

const newYearsResolution = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolution.length);
console.log(newYearsResolution[newYearsResolution.length -1])
// >> Output: 2

// These built in method call to arrays to make common tasks possible
// one method, .push() allows to add items to the end of an array

const itemTracker = ['orange', 'apple', 'kiwi'];
itemTracker.push('apricot', 'mango');
console.log(itemTracker);
// >> Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// we use the push method by dot notation, connecting push  to itemTracker with a .
// Then, we call it like a function, because .push() is a function that js allows to use on an array
// .push() can take a single argument or multiple arguments separated by a column
// notice that .push() changes or mutates itemTracker
// you can also see .push() referred to as a destructive method since it changes the og array
// if looking for a method that will mutate an array by adding elements t o it, then .push() is the method for you :)

// guh, practice

const chores = ['actually cleaning'];
chores.push('do art', 'play epic video games', 'make food to eat');
console.log(chores);

const remove = chores.pop();
console.log(remove);

const newItemTracker = ['guh 0', 'guh 1', 'guh 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);
// >> Output: [ 'item 0', 'item 1' ]
console.log(removed);
// >> Output: item 2

//.pop() does not take any arguments whatsoever
// returns the value of the last element
// also a method of mutation, and also destructive.
// use .pop() to remove the last element if you need to mutate an array that way.

/* sigh,
throw monokuma and watches him as he explodes */