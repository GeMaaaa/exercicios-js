let valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //mostre o vetor 0 e 3
console.log(valores[4]) //vetor que nao existe

valores[4] = 10
console.log(valores)
console.log(valores.length) //conta a quantidade de vetores

/*
pode misturar varios tipos em um array, ex:string, objeto..
push adiciona novos elementos no array
*/
valores.push ({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //pop retira o ultimo valor do array
delete valores[0] //deleta o valor do array indicado
console.log(valores)

console.log(typeof valores)


