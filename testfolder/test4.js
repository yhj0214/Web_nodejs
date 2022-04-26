const {odd, even} = require('./test3');
function checkOddEven(num) {
    if(num % 2) {
        return odd;
    };
    return even;
};
module.exports = checkOddEven;