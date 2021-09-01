// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaaaaa' // contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 18,
    peso: 70,
    endereco: {
        logradouro: 'Rua muito legal kkkkj',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)
