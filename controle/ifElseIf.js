Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = (nota) => {
    if(nota.entre(9, 10)) {
        console.log('Slaaaaaay')

    } else if(nota.entre(7, 8.99)) {
        console.log('yes gurl')

    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação pra você :P')

    } else if(nota.entre(0, 3.99)) {
        console.log('DAMN BRO')

    } else {
        console.log('que isso ein????')
        
    }

    console.log('fim') //verificar
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-10)
imprimirResultado(17)
