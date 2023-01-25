const notas = [7.7, 6.5, 5.2, 8.9, 1.4, 7.1, 9.0]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

/*
*filter e funcao callback que vai retornar true ou false
 * essa funcao vai ser chamada para cada elemento, se for
 * true, signifca que aquele elemento deve ser adicionado
 * no array que esta sendo gerado. Se for false ele nao
 * sera adicionado, e como se fosse um sub array criado do
 * array original
 */

notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//ou poderia deixar um pouco mais "elegante" criando uma constante
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)


