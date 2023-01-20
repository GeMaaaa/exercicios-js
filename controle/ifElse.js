const imprimirResultado = (nota) => {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    } else {
        console.log('Reprovado com ' + nota)
    }
}

imprimirResultado(2)
imprimirResultado(9)
imprimirResultado('opaa!') //tipagem fraca, cuidado