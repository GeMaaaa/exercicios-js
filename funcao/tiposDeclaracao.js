//as funcoes com function declaration sao iniciadas antes
console.log(soma(1, 4))

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function(x, y) {
    return x - y
}

//named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))