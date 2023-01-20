let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

/*criando variavel abuble :p, sem utilizar
var e nem let, NAO TENTE ISSO EM CASA, RISCO DE
BUG*/
abc = 3
console.log(global.abc)

/*e mais comum ver module.exports em um obj do que
definido diretamente com this

module.exports = { e: 456, f: false, g: 'teste'}

*/