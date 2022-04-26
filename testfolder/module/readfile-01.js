const fs = require('fs');

const file = fs.readFileSync('readme.txt', {
    encoding: 'utf8'
})

console.log(file)