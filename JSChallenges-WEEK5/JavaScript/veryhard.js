// VERY HARD: Write a function that takes in a string and outputs the 
// *first* occurrence of a character that does not repeat itself in that string. 
// Output the first character in a string that is unique.

// Input: “the quick brown fox jumps over the calm kitten quietly”  Output: “b”
// Input: “this hat is the greatest!”  Output: “g”
// Input: “what a wonderful day it has been!”  Output: “o”


const userInput = prompt(`Enter in a sentence.`);

firstOcc = (userInput) => {
    

    for (var i = 0; i < userInput.length; i++) {
    // Variable position has the index of each character from the user's input 
    // because i looped through the string and stored it. 
        const position = userInput.charAt(i);

        // If the index of each letter in the user's input is equal to the
        // last index of each letter it will return the character of that specific index.
        if (userInput.indexOf(position) === userInput.lastIndexOf(position)) {
            return position
        }
    }

}

console.log(firstOcc(userInput));

