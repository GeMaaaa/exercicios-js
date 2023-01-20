function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado! sua nota é ' + nota + ' Parabéns!!')
    }
}

soBoaNoticia(8)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade: ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})

/*

teste
const nota = (nota) => {
    if(nota >= 7) {
        console.log('Aprovado! sua nota é ' + nota + ' Parabéns!!')
    } else {
        console.log('RA, RE, RI, RO, RUAAAA, REPROVADO, SUA NOTA É ' + nota)
    }
}

nota(4)
nota(8)

*/
