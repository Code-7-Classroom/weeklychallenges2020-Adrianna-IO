const fs = require('fs')
const userFile = process.argv[2]

fs.readFile(userFile, (err, contents) => {

  const fileLines = contents.toString().split('\n').length - 1
  console.log(fileLines)
})