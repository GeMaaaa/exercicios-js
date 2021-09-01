function tratarErroELancar(erro) {
    //throw new Error('Ops, parece que temos um erro aqui, não se preocupe, nossa equipe já foi notificada, brevemente resolveremos o erro =)')    
    //throw 10 irá lançar um numero
    //throw true posso usar v ou f
    //throw 'mensagem de erro'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome:'Roberto'} //criei um 'nome' em português, então ele não vai conseguir acessar, pois em cima estou chamando pelo 'nome' em inglês
imprimirNomeGritado(obj)