/*
closure é o escopo criado quando uma funcao e declarada. Esse escopo
permite a funcao acessar e manipular variaveis externas a funcao
*/

const x = 'primeiro'

function fora() {
    const x = 'segundo'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())