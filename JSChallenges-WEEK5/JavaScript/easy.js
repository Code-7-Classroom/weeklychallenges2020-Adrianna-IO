// EASY: Using ES6 syntax, write a function that takes in 
// an array of numbers and outputs the maximum number.

// Input: [1, 2, 3]  Output: 3
// Input: [3, 6, 4, 5, 2, 1]  Output: 6
// Input: [3, 3, 3]  Output: 3

let arr1 = [3, 6, 4, 5, 2, 1];
const findMax = (array) => Math.max(...arr1); // using deconstructing assignment to extract data from the array

console.log(findMax(arr1));