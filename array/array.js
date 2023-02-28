console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('bia', 'lucas', 'ana')
console.log(aprovados)

let aprovados2 = ['jefersson', 'josé', 'murilo']
console.log(aprovados2[0])
console.log(aprovados2[1])
console.log(aprovados2[2])

aprovados2[3] = 'gustavo' //adicionar no indice
aprovados2.push('katia') //adicionar
console.log(aprovados2.length) //contar

aprovados2[9] = 'rafael'
console.log(aprovados2.length)
console.log(aprovados2[8] === undefined)

console.log(aprovados2)
aprovados2.sort()
console.log(aprovados2)

delete aprovados2[0]
console.log(aprovados2[0])

//adicionar elementos, remover elementos
aprovados.splice(1, 0, 'elemento1', 'elemento2')
console.log(aprovados)