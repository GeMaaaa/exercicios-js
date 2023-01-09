const desastre = "Furacao"

console.log(desastre.charAt(4))//retorna a letra do indice 4
console.log(desastre.charAt(7))//indice vazio, inexistente
console.log(desastre.charCodeAt(2))//retorna valor do unicode html

console.log(desastre.substring(3))//exclue o indice indicado
console.log(desastre.substring(0, 3))

console.log('Ataque do '.concat(desastre).concat('!!!!!!!'))
console.log('ATAQUE '+'DO '+(desastre)+' !!!!!!!!!!!!!!!!!!!!!!')
console.log(desastre.replace(/\w/g, 'p'))

console.log('joao,katia,denis'.split(','))

