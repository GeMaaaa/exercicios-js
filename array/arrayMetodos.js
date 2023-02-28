const comida = [ 'pizza', 'coxinha', 'camarão', 'sorvete']
comida.pop() //sorvete derreteu
console.log('pop - 1: ',comida)

comida.push('danone')
console.log('push - 2: ',comida)

comida.shift() //remove o primeiro
console.log('shift - 3: ',comida)

comida.unshift('goiaba') //adiciona no primeiro
console.log('unshift - 4: ',comida)

// splice adiciona e remove elementos

// adicionando
comida.splice(2, 0, 'amora', 'uva')
console.log('splice adiciona - 5: ',comida)

// remover
comida.splice(3, 1)
console.log('splice remove - 6: ',comida)

const comidaNovaAdicionada = comida.slice(2) // novo array
console.log('slice novo array - 7: ',comidaNovaAdicionada)

const comidaNovaAdicionada2 = comida.slice(1, 4)
console.log('slice novo segundo array - 8: ',comidaNovaAdicionada2)