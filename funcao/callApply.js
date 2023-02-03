function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))

/*
O parâmetro 0.17 é referente ao imposto que vai ser usado no cálculo

function getPreco(imposto = 0, moeda = 'R$'){     
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
  }  
  const carro = { preco: 1000, desc: 0.20 }
 
  console.log(getPreco.call(carro)) //chamando a função SEM PASSAR O VALOR DE IMPOSTO! - imprime 800
Sem passar o valor de imposto,  a função getPreco vai ser aplicada considerando os atributos de carro, que
são o preco = 1000 e o desc = 0.20, e assim ele faz 1000 * (1 - 0.20) * (1 + 0) = 800

Agora, passando um valor para o imposto

console.log(getPreco.call(carro, 0.15 , '$'))//imprime 919.999.... ou 920
Ele vai considerar o desc = 0.20 e o imposto = 0.15, fazendo assim 1000 * (1 - 0.20) * (1 + 0.15) = 920

Esses cálculos todos são feitos com base na segunda linha da função:

return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
*/