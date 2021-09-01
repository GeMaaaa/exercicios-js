// vai retornar um numero aleatorio, dentro de um operador destructuring
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// vai gerar valores aleatorios entre 50 e 40
const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({})) // ficará navegando entre 0 e 1000

// irá dar erro, por que vai tentar desestruturar algo nulo ou indefindido
console.log(rand()) 
