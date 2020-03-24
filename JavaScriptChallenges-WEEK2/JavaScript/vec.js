// VERY EASY: Write a function named min that takes two arguments 
// and returns their minimum.


var num1 = parseInt(prompt("Type any number."));
var num2 = parseInt(prompt("Type a second number to find the minimum of the two."));

function min(num1, num2) {
    return (num1 > num2) ? num2 : num1
}

document.write(min(num1, num2) + ' is the minimum.');