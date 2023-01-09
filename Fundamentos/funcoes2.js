/*armazenando uma funcao em uma variavel
funcao anonima é aquela que não tem nome.

Como precisamos chamar a função anônima 
em algum momento, atribuímos essa função a uma variável
*/

const imprimiSoma = function (a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)

//armazenando um funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito, usar return sem precisa escrever el
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))