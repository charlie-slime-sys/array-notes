
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
let listLast = hobbies[2];
console.log(listLast);

let seasons = ['Winter', 'Spring', 'Summer', 'Fall']
seasons[3]= 'Autumn';
console.log(seasons);
