const fs = require('fs');


const solarSystem = fs.readFile('./solarSystem.rtf', function(err, filetext) {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(`File Output: ${filetext}`)
    }
});
console.log(solarSystem);