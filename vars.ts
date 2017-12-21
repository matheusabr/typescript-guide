var number = 1;
// let was introduced by ES6 (ES 2015)
let count = 5;

// Var
function testVar() {
    // var is scoped by nearest function
    for (var index = 0; index < 10; index++) {
        console.log(index);
    }
    console.log('Finally: ' + index);
}
testVar();

// Let
function testLet() {
    // let is scoped by nearest block
    for (let index = 0; index < 10; index++) {
        console.log(index);
    }
    // mark variable as not known
    // generate a compilation error: 
    // error TS2304: Cannot find name 'index'.
    console.log('Finally: ' + index);
}
testLet();