function tratarErroELancar(erro) {
    // throw new Error('...opa, algo não saiu como o esperado')
    // throw 10
    // throw true
    // throw 'algo deu errado meu chapa'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimrNomeGritado(obj) {
    try {
        
    console.log(obj.name.toUpperCase()) + '!!!!!!!'
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Patricia' }
imprimrNomeGritado(obj)