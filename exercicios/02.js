/**02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

let triangulo = (a, b, c) => {
    if (a === b && b === c) {
        console.log('Equilátero: Os três lados são iguais')
    }else if (a === b || b === c || a ===  c ) {
        console.log('Isósceles: Dois lados iguais')
    } else {
        console.log('Escaleno: Todos os lados são diferentes')
    }
}

triangulo(2, 2, 2)
triangulo(2, 2, 9)
triangulo(2, 7, 4)


