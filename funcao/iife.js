// IIFE = Immediately Invoked Function Expression

(function grito() {
    console.log(`SERÁAAAAA EXECUTADO NA HORA!`)
    console.log(`FUGINDO DO ESCOPO GLOBAL!!!`)
})()

// nao posos acessar grito()

let falar = falar => {
    return console.log('oi')
}

falar()

/*
o benefício das funções de auto-invocação é que elas nos permitem
executar o código uma vez sem declarar quaisquer globais. Um exemplo:

(function saudacao() {
    console.log("Olá, Tudo bem?")
}());

Após a função acima ter sido inicializada, ela será imediatamente
chamada. Não é mantida uma referência à função, nem mesmo ao seu
valor de retorno. Dessa forma, daria erro tentar chamar ela
depois por meio de saudacao(), indicaria que ela não foi definida.

Sobre um exemplo de uso, esse tipo de função é muito conveniente para
executar uma lógica de inicialização. Usando funções de invocação
automática, executaremos o trabalho de inicialização apenas uma
vez, porque após a execução, perderemos a referência para a função.

*/