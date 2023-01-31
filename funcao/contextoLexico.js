//funcao carrega consigo o local que ela foi definida

const valor = 'Primeiro'

function PrimeiroOuSegundo() {
    console.log(valor)
}

function exec() {
    const valor = 'Segundo'
    PrimeiroOuSegundo()
}

exec()