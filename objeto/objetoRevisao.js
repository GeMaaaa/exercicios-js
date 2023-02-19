// colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 235

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'BMW 320 gp 2022',
    valor: 267.950,
    propietario: {
        nome: 'Kai',
        idade: 34,
        endereco: {
            logradouro: 'Rua algum lugar da coreia do sul',
            numero: 97
        }
    }, condutores: [{
        nome: 'Huyna',
        idade: 20
    }, {
        nome: 'Sayuri',
        idade: 19
    }],
    calcularValorSeguro: function () {
        //....
    }
}

carro.propietario.endereco.numero = 1000
carro['propietario']['endereco']['logradouro'] = 'Rua yakisobanabara'
console.log(carro)

delete carro.condutores
delete carro.propietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)

//acessar algo que esta indefinido da erro
console.log(carro.condutores.length)

