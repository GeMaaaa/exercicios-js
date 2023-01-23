//tentar utilizar outras estruturas, nao é recomendado
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
enquanto x for diferente de 5 ele vai executando, no
momento que ele encontrar o x, ele encontra o break, e
break faz com que ele saia do for
*/
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

/*
nao use, porem isso existe, o melhor seria criar pequenas
funcoes com pequenas responsabilidades, para que a juncao
dessas responsabilidades, uma chamando a outra e vice-versa,
assim irei ter um codigo mais organizado, com mais facil manutencao
*/

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
} 