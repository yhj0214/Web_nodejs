function zoo() {
    console.log('zoo');
};

zoo()

const yoo = function() {
    console.log('yoo');
};
yoo()

const too = () =>{
    console.log('too')
}
too()

const foo2 = () => ('foo2');
const boo2 = () => {return 'boo2'};
console.log(foo2());
console.log(boo2());

var M = {
    v:'v',
    f:function() {
        console.log(this.v);
    }
}

M.f();

module.exports = M;
