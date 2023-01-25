//o conceito de funcao anonima e so pelo fato de ela nao ter um nome
const soma = function (x, y) {
    return (x + y)
}

/**
 * operacao opera em cima de a e b, se eu nao passar nada, por padrao ele
 * vao assumir a funcao soma
 */
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

//posso passar uma funcao diretamente dentro da chamada imprimirResultado
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)


const pessoa = {
    falar: function () {
        console.log('OiEeEeEe')
    }
}

pessoa.falar()

/*
tambem funciona sem o function

const pessoa = {
    falar: () {
        console.log('OiEeEeEe')
    }
}

pessoa.falar()
*/