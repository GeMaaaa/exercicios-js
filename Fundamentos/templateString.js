const nome = 'Safira'
const concatenacao = 'Ola ' + nome + '!!'

const template = `
    oOoOlaAaA
    senhor(a)
    ${nome}`

console.log(concatenacao)
console.log(template)

console.log(`4 + 4 = ${4 + 4}`) //ele vai somar o ${}

const up = texto => texto.toUpperCase()
console.log(`Eii, ${up('cuidado')}!!!
    tem um buraco na pista!`)