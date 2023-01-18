//destructuring em funcoes
//obs dentro de rand nao é um obj, e um destructuring
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
/*
console.log(rand({max:50, min: 40})) //aqui estou usando um obj

//entao eu poderia criar um obj e passar ele no console, que daria o
mesmo resultado, mas de forma otimizada
*/
const obj = { max: 50, min: 40 }
console.log(rand(obj))

/*
 eu posso definir o minimo com um numero e o js vai deixar o valor
 de 1000 definido anteriormente como padrao do maximo 
 */

 console.log(rand({ min: 955}))

 /*
eu tambem posso passar um obj vazio e ele vai navegar entre 0 e 1000
 */

console.log(rand({}))

 /*
se eu passar numeros aleatorios sem definir um obj iria dar erro
por que ele vai tentar desestruturar algo que esta undefined ou nulo(null)
 */

console.log(rand())