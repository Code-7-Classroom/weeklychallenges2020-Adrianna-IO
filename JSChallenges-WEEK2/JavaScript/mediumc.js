// MEDIUM: Create a program that accepts a number (1-12) as input and logs 
// to the console that number and its corresponding month. For example: if 
// the user enters the number 3, then it should return the month “March.” 
// Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


var months = ['null', 'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December']
var choosenNumber = parseInt(prompt("Type a number 1-12 to find the corresponding month."));

switch (choosenNumber) {
    case 1:
        document.write(choosenNumber + ' - ' + months[1]);
        break;
    case 2:
        document.write(choosenNumber + ' - ' + months[2]);
        break;
    case 3:
        document.write(choosenNumber + ' - ' + months[3]);
        break;
    case 4:
        document.write(choosenNumber + ' - ' + months[4]);
        break;
    case 5:
        document.write(choosenNumber + ' - ' + months[5]);
        break;
    case 6:
        document.write(choosenNumber + ' - ' + months[6]);
        break;
    case 7:
        document.write(choosenNumber + ' - ' + months[7]);
        break;
    case 8:
        document.write(choosenNumber + ' - ' + months[8]);
        break;
    case 9:
        document.write(choosenNumber + ' - ' + months[9]);
        break;
    case 10:
        document.write(choosenNumber + ' - ' + months[10]);
        break;
    case 11:
        document.write(choosenNumber + ' - ' + months[11]);
        break;
    case 12:
        document.write(choosenNumber + ' - ' + months[12]);
        break;
    default:
        alert('You have entered an invalid number, try again.');
}
