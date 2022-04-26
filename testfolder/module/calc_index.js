var calc1 = require('./calc1');
console.log('모듈 분리 후 calc.add 함수 호출 결과 : %d', calc1.add(10,10));
var calc2 = require('./calc2');
console.log('모듈 분리 후 calc.add 함수 호출 결과 : %d', calc2.add(10,10));