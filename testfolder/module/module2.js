//calc 변수 생성 후 module.exports로 한번에 내보내기

var calc = {};
calc.add = function(a,b) {
    a+b;
};
calc.multiply = function(a,b) {
    a*b;
};

module.export = calc;