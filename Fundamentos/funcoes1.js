//funcao sem retorno
function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(4, 4)
imprimeSoma(2)
imprimeSoma(2, 2, 1, 1)
imprimeSoma()

// funcao com retorno, tendo um valor padrao
function soma(a, b = 1) {
    return a + b
}
/*
nao iria retornar um valor por que a funcao ja tem retorno
soma(2, 2), entao tem que colocar soma dentro do console.log
*/
console.log(soma(2, 2))
console.log(soma(2))
