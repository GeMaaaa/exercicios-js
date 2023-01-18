/*
geralmente o sinal de = significa atribucao, mas nesse caso
significa comparacao, esta perguntando se '1' e igual ao 
numero 1, se for verdade ele retornara true, se falso retornara 
false. no caso a baixo ele retornara true pois esta apenas
vendo o numero e nao o tipo desse numero
*/
console.log('01)', '1' == 1)

/*
=== significa restritamente igual, no exemplo de cima iria dar
false, pois '1' nao e RESTRITAMENTE igual a 1, '1' e uma string
e 1 e number
*/

console.log('02)', '1' === 1)

// '3' e diferente de 3?
console.log('03)', '3' != 3)

// '3' e restritamente diferente de 3?
console.log('04)', '3' !== 3)

// 3 e menor que 2?
console.log('05)', 3 < 2)

// 3 e maior que 2?
console.log('06)', 3 > 2)

// 3 e menor OU igual a 2?
console.log('07)', 3 <= 2)

// 3 e maior OU igual a 2?
console.log('08)', 3 >= 2)
console.log('09)', 3 >= 3)

// 01/jan/1970
const d1 = new Date(0)
const d2 = new Date(0)

/* 
quando eu pergunt se d1 e restritamente igual ao d2 ele ira
retornar um valor falso, por que ele e um tipo primitivo do
js, sendo assim o restritamente igual esta comparando o ENDERECO
de memoria de date, que JAMAIS pode ser repetido, como se fosse um
cpf
*/

console.log('10)', d1 === d2)

/* 
Veja que a partir do momento que eu executo juntamente com o
parametro getTime  o metodo passa a retornar VALORES e nao enderecos
de memoria, sendo assim a comparacao e valida e se detiver os mesmo
valores ira retornar true 
*/

console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)
