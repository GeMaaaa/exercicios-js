let valor //não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

//console.log(valor.toString()) //Erro!
//você não pode ler a propiedade toString de nulo

const produto = {} //produto não é nulo
console.log(produto.preco)// ele dá undefined por que não está definido o preço dentro do produto
//se eu colocar algo depois irá dar erro, irá dizer que não tem a propiedade do "a" que está indefinido

console.log(produto)

produto.preco = 9.88
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)//como é indefinido o valor dará falso
delete produto.preco // faço isso seu meu intuito é deletar um atributo do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) //o !! é conversão para boolean, false,true
console.log(produto)