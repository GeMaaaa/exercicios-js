// novo recurso do ES2015, destructuring em obj {}

const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//esta buscando os dados nome e idade da const pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

//defini "apelidos" para nome e idade
const { nome: n, idade: i } = pessoa
console.log(n, i)

/*dados não existentes, atribui um valor padrao true
se caso vier vazio*/
const { sobrenome: sobnome, bemHumorada: bemHu = true } = pessoa
console.log(sobnome, bemHu)

//acessando logradouro e numero dentro de endereco
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

/*
>erro ao acessar atributos que nao existem de forma
aninhada<

const { conta: { ag, num }} = pessoa
console.log(ag, num)
*/