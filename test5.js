const {odd, even} = require('./test3');
const checkNumber = require('./test4');
function checkStringOddOrEven(str) {
    if(str.length % 2) {
        return odd;
    };
    return even; 
};
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));