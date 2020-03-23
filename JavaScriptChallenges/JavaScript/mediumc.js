/*  Write a program to tell if someone is shouting (typing in all caps), 
whispering (typing in all lowercase), or neither. Use prompt to get user input, 
and then console log whether the user was shouting, whispering, or talking normally.*/

var myName = prompt("Type my first name to get my attention.");


switch (myName) {
    case 'ADRIANNA':
        console.log("You don't have to shout to get my attention.");
        break;
    case 'adrianna':
        console.log("Could you speak up a bit, I couldn't hear you.");
        break;
    case '':
        console.log('If you ever need my assistance, just type my name.');
        break;
    default:
        console.log('Hey! How may I assist you today? :)');

}

