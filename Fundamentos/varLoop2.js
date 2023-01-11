//uma constante com um array
const funcs = []

/*variavel i recebe o valor 0, se i é menor que 10, então adicione 1
dentro do array irei colocar funcoes, funcs.push() quer dizer que eu
vou adicionar um elemento NO ARRAY*/

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[2]()

//o valor foi 10 por que var não tem escopo de bloco