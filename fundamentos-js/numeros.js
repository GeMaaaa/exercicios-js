const peso1 = 1.0 // esse numero é mostrado como se fosse inteiro, porém se o numero for ao inves de 0 ser 1 
// ou qualquer outro, ele fica flutuante

//outra forma de declarar um numero
const peso2 = Number('2.0') 

console.log(peso1, peso2)

//para saber se o valor é inteiro ou não, usando o false or true
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

//para exemplo melhor pensar que peso1/2 é uma pessoa
//e esse programa está tirando a media
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) 
//pode se ver claramente que no console o numero está muito grand, para resolver isso use: .toFixed(2)

//convertendo valor numerico numa string(texto)
console.log(media.toString(2))//se passsar o toString(2) o valor fica binario

//obs não estou mudandoo valor de media, até pq ela é
//constante, o que faz é aplicar uma função em cima desse valor

console.log(typeof media) //typeof fala qual tipo é
console.log(typeof Number)

//typeof tipo, number, função
//number com n minusculo e o tipo, e o Number com maiusculo é a função
