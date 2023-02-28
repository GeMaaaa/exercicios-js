const simulandoArrayComObjeto = { 0: 'Kai', 1: 'Jimin', 2: 'Hoseok'}
console.log(simulandoArrayComObjeto)
Object.defineProperty(simulandoArrayComObjeto, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(simulandoArrayComObjeto[0])

const meuArray = ['Kai', 'Jimin', 'Hoseok']
console.log(simulandoArrayComObjeto.toString(), meuArray)