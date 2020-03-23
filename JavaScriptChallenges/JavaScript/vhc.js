/* VERY HARD: Create a simple calculator that prompts the user for a number, 
an operator (either +, -, * or /) and another number, and then uses the functions 
created in the hard challenge to output the value in sentence form. 
Example output: "3 + 4 = 7"*/



var x = parseInt(prompt('What is your first number for this calculation?'));
var caloperator = prompt('Do you want to add(+), subtract(-), multiply(*), or divide(/)?');
var y = parseInt(prompt('What is your second number for this calculation?'));
var z = add(x, y); // need to be a function, need the function to be the result of the equation
var a = subtract(x, y);
var b = multiply(x, y);
var c = divide(x, y);

function add(x, y) {
    return x + y;
}


function subtract(x, y) {
    return x - y;
}


function multiply(x, y) {
    return x * y;
}


function divide(x, y) {
    return x / y;
}


switch (caloperator) {
    case '+':
        document.write(x + caloperator + y + '=' + z);
        break;
    case '-':
        document.write(x + caloperator + y + '=' + a);
        break;
    case '*':
        document.write(x + caloperator + y + '=' + b);
        break;
    case '/':
        document.write(x + caloperator + y + '=' + c);
        break;
    default:
        document.write('Please refresh and try your calculation again.');
}