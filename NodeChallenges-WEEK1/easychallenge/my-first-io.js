var fs = require('fs')

var userInput = fs.readFileSync(process.argv[2])
var fileLines = userInput.toString().split('\n').length - 1
console.log(fileLines)