//pessoa -> localdememoria123 -> {...}
const pessoa = {nome: 'jao'}
pessoa.nome = 'Pedrin'
console.log(pessoa)

//pessoa -> outrolocaldememoriaquenaoeo123 -> {...}
//pessoa = {nome:babalu}

Object.freeze(pessoa) //nao deixa alterar NADA

pessoa.nome = 'Maria'
pessoa.end ='Rua perdida'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'little pop corn'})
pessoaConstante.nome = 'zeca urubu'
console.log(pessoaConstante)