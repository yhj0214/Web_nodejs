var calc = {};

calc.add = function(a,b) {
    return a+b;
};

console.log('모듈 분리 전 calc.add 함수 호출결과: %d', calc.add(10,10));
