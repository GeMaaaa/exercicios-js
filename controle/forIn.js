const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

/*
para cada um dos elementos da nota 
ele vai me devolver um indice i , lembrando que
vou receber o indice e nao o valor em si da nota
*/
for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Aninha',
    sobrenome: 'Goodbones',
    idade: 20,
    peso: 78
}

for(nomeQualquerAtributo in pessoa) {
    console.log(`${nomeQualquerAtributo} = ${pessoa[nomeQualquerAtributo]}`)
}