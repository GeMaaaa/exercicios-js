//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'ana', idade: 23 }
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Santos'
delete pessoa.nome
pessoa.idade = 25
console.log(pessoa)

//Object.freeze = selado + valores constantes