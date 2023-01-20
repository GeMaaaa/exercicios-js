/*
ternario, a primeira expressão é uma expressao relacional: nota >= 7
e a segunda seriam o 'Aprovadoo' : 'Reprovado'

*/
const resultado = nota => nota >= 7 ? 'Aprovadoo =)' : 'Reprovado =('

console.log(resultado(4))
console.log(resultado(9))


/*se eu quisesse fazer essa mesma funcao porem com corpo:*/

const resultado2 = nota => {
    return nota >= 7 ? 'Aprovadoo2 =)' : 'Reprovado2 =('
}
console.log(resultado2(10))
console.log(resultado2(5.0))



