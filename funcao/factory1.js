/*
const prod1 = {
    nome: '12 ovos',
    preco: 10.99
}

const prod2 = {
    nome: 'uva',
    preco: 5.99
}

factory(fabrica), e uma funcao que retorna um obj
*/

//factory simples
function criarPessoa() {
    return {
        nome: 'Anides',
        sobrenome: 'batatinha'
    }
}

console.log(criarPessoa())