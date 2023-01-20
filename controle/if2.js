/*
um if tem a opcao de usar ou nao as chaves
{}, porem se nao usar ele ira apenas ler o primeiro
parametro, o segundo e os demais serao ignorados
*/

const teste1 = (num) => {
    if(num > 7)
        console.log('opa ' + num)

    console.log('Final')
}

// teste1(6)
// teste1(8)

/*
NAO UTILIZAR ';' NA CRIACAO DE ESTRUTURAS DE
CONTROLE, POIS SIGNIFICA UMA SENTENCA DE CODIGO VAZIA
*/
const teste2 = (num) => {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(9)