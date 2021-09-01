function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //simbolo ou = ||
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trbalho1 ^ trabalho2 ) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = ! comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


// OU = ||
// E = &&

// verdadeiro e falso
// v e v -> v
// v e f -> f
// f e ? -> f


// v e ? -> v
// f e v -> v
// f e f -> f

// exclusivo falso
// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f

// negação logica, a negação de verdadeiro vira falso
// negação logica de falso vira verdadeiro
// !v -> f
// !f -> v

function frases (frase1, frase2) {
    const frasestrue = frase1 && frase2
    return { frase1, frase2}
}

console.log(frases(true, false))


// se o primeiro for falso ele nem olha para o outro valor

