// usando a notacao literal de objetos
const obj1 = {}
console.log(obj1)

//object em Js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDescontoPipipi = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15) //15% de desconto
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDescontoPipipi().toFixed(2), p2.getPrecoComDescontoPipipi().toFixed(2))

//funcao factory(padrao de projeto), posso tanto usar uma funcao construtora, como tambem a literal
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Danielle', 7980, 4)
const f2 = criarFuncionario('Xulianaaa', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}')
console.log(fromJSON.info)







