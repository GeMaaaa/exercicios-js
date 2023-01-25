const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    //como um array comeca do indice 0, eu quero comecar a partir do
    console.log(`${indice + 1}. ${nome}`)
}

/*
 *COMO VOU SABER  QUE O COMPILADOR ENTENDE QUE O PARAMETRO INDICE DA
 * FUNCAO IMPRIMIR SE REFERE A POSICAO DO ARRAY?
 * 
 * O forEach vai varrer cada item do Array e executar a funcao atribuida.
 * um Array possui um indice e um valor (CHAVE-VALOR), entao o forEach vai
 * quebrar o array assim [chave: v, chave: v, chave: v], e ai a funcao 
 * imprimir pega a chave(indice) e o valor(nome) e imprime no console.
 */

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))

/*
 * se o exercicio se chama callback, entao quando isso ocorre de fato??
 * 
 * o evento foi o loop, quando o array encontra um novo elemento ele
 * dispara a funcao que eu chamei
 * 
 */