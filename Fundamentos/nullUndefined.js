let valor // nao inicializada
console.log(valor)

valor= null // ausencia de valor
console.log(valor)

/*
usar null se quiser zerar o valor de uma variavel
console.log(valor.toString()) ERRO!
*/

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 8.90
console.log(produto)

produto.preco = undefined //EVITE ATRIBUIR UNDEFINED
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)