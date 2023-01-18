//Destructuring com Array

/*
se o min for maior que o max. faca isso = max min
ou seja, inverta as duas variaveis,o que era min
agora e max e vice versa
*/

/*
obs [min, max] estou acesssando o destructuring e o
[max, min] eu estou criando um array com os atributos
desestruturados de um array
*/
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/*
como eu estou chamando apartir de um array, nao
estou usando o nome do atributo do obj, igual ao
exercicio do destructuring3, que ficava claro quem era
o max e o min, vou passar apenas os numeros 50 e 40
*/

console.log(rand([50, 40]))

/*
igual ao anterior, eu tambem poderia passar apenas
um valor, como o min foi definido primeiro, entao esse
sera o valor dele
*/

console.log(rand([992]))

//posso passar apenas o segundo, e o padrao ira ser 0

console.log(rand([, 10]))

/*
posso passar um array vazio, ele vai ser o padrao
navegando de 0 a 1000
*/

console.log(rand([]))

/*
se eu passar nada, ele vai dar erro, por que vai
tentar desestruturar algo undefined ou null
*/

console.log(rand())