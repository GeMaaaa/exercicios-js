const pai = { nome: 'kai', corDeCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'ana'
console.log(filha1.corDeCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'bibi', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'carlão'
console.log(`${filha2.nome} tem cabelo ${filha2.corDeCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


// filha2.hasOwnProperty(key) a propiedade pertence a ela ?
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por herença: ${key}`)
}