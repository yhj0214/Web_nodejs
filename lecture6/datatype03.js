let foo = {a:1, b:2}
console.log(JSON.stringify(foo))

let boo = [1,2,3,4]
console.log(JSON.stringify(boo))

let foo2 = {a:1, b:2}
var foo3 = JSON.stringify(foo2)
console.log(JSON.parse(foo3))

let boo2 = [1,2,3,4]
var boo3 = JSON.stringify(boo2)
console.log(JSON.parse(boo3))
