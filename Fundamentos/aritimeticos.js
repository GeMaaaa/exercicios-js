const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a

/*
modulo é o resto da divisao, ele pega o valor
que eu passei, divide, e o resto da divisao vai ser
o resultado. se a letra a fosse par o resultado ia
ser 0 por que um numero par e divisivel por 2, e se
a fosse impar, ele vai fazer 3 dividido por 2, que 
da 2 e o resto é 1. Esse exemplo e muito utilizado
para que verifique se o numero e par ou impar
por que se for par e 0 e impar 1
*/
const modulo = a % 2

console.log(`a soma de 3 + 5 + 1 + 15 é igual a = ` +soma)
console.log(`a subtração de 15 - 5 é igual a = ` +subtracao)
console.log(`a multiplicação de 3 x 5 é igual a = ` +multiplicacao)
console.log(`a divisão de 15 ÷ 3 é igual a = ` +divisao)
console.log(`o resto da divisão de 3 ÷ 2 é igual a = ` +modulo)