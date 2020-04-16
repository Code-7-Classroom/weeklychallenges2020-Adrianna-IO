// MEDIUM: Write a function that takes in an array of numbers 
// and outputs the average of all the numbers. 

// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2


const array1 = [1.5, 3, 2.5, 1];
const findAvg = (array) => array1.reduce((acc, val) => acc + val) / array1.length; 


// In the reduce method I have a callback function that is taking 2 parameters, the accumulator and the value.
// the acc value is the sum of the returned values from running the callback function on each element in the array.
// The val parameter represents the the current value (or element in the array) that is being processed, the initial value is 0 if not specified.
// the reduce method basically loops through the array, processed the callback function on each iteration 
// then returns the array as a single value and that is used to then divide by the length of the array to create the average.

console.log(findAvg(array1));