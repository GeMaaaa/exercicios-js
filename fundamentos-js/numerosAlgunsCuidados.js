console.log(7 / 0) //se vc divide um numero mt pequeno ele acaba aumentando o valor

//e se vc dividir por 0 irá dar infinity
//tem um tipo chamado infinity que é o nome dessa operação

console.log("10" / 2)//está dividindo um numero string com um inteiro
//geralmente essa operação iria dar errado, porém
//no js o resultado será 5, ou seja, a operação dá certo

console.log("Show!" * 2) //em outras linguagens isso pode funcionar, mas em js não

console.log(0.1 + 0.7)// essa operação não irá dar 0.8
//por que a expecificação que o js tem é diferente, e o ponto flutuante irá ter 
//imprecisão, outras linguagens adotam este metodo, por que se a operação retornasse um valor
//preciso o processo iria demorar mais para rodar

//console.log(10.toString()) isso não da certo

//mas

console.log((10.345).toFixed(2)) //sim

console.log('3'+ 2 )//nesse caso ele não vai somar, ele vai juntar os dois numeros
console.log('3'- 2 )//não tem sentido na string então ele subtrai de forma normal
console.log('3'/ 2 )//tbm não tem sentido na string então ele divide de forma normal também

