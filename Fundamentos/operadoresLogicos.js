/* 
todos os operandos utilizando o 'e' tem que ser verdadeiros para
uma expressao ser verdadeira

    v e v -> v
    v e f -> f
    f e ? -> f

utilizando o 'ou' basta um operando ser verdadeiro para o 
resultado ser verdadeiro

    v ou ? -> v
    f ou v -> v
    f ou f -> f

o 'ou exclusivo' tem que ser sempre diferente, v e f ou f e v, se 
for os dois v ou os dois f, o resultado vai ser f

    v xor v -> f
    v xor f -> v
    f xor v -> v
    f xor f -> f

negacao logica
    !v -> f
    !f -> v
 */

//ou === ||, e === &&

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 =trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unario

    /*
        mesmo que o js nao suporte mais de um retorno, posso jogar
        todas as constantes dentro de um obj
    */

        /*
            criacao inteligente de objs, ecma2015
            estou criando um obj com chave e valor,
            onde o nome e o valor sao iguais

            ex antigo:
            comprarSorvete: comprarSorvete,
            comprarTv50: comprarTv50,
            etc..

            seria muito repetido, codigo "sujo"
        */
        return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
