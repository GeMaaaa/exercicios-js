// cadeia de prototipos (prototype chain)
Object.prototype.atributo0 = '0' //nao fazer
const avo = { atributo1: 'A' }
const pai = { __proto__: avo, atributo2: 'B', atributo3: '3' }
const filho = { __proto__: pai, atributo3: 'C' }
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta
        } else {
            this.velocidadeAtual = this.velocidadeMaxima
        }
    },

    //para mostrar a velocidade
    status() {
        return `${this.velocidadeAtual}km/h de ${this.velocidadeMaxima}km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velocidadeMaxima: 324 // shadowing
}

//da mesma forma que eu uso o this para referenciar o  obj atual, eu uso o super para referenciar meu prototipo
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //estou sobrescrevendo, fazendo shadowing na funcao status
    }
}

Object.setPrototypeOf(ferrari, carro) // ferraria tem carro como seu prototipo, consigo acessar os atributos tanto de ferrari, como o de carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
