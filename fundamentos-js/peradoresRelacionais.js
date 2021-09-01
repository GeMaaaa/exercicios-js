console.log('01)', '1' == 1) //compara a igualdade entre duas coisas
console.log('02)', '1' === 1) // é restritamente igual?
console.log('03)', '3' != 3) // 3 é diferente de 3?
console.log('04)', '3' !== 3) // é diferente? (o tipo é diferente?/restrito)

console.log("shita)", 10 === 3)//teste

console.log('05)', 3 < 2) //3 é menor que 2?
console.log('06)', 3 > 2) //3 maior que 2?
console.log('07)', 3 <= 2) //3 menor igual a 2?
console.log('08)', 3 >= 2) //3 é maior igual a 2?

const d1 = new Date(0) //o 0 significa a data de ref do js, primeiro de janeiro de 1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // é restritamente igual?
console.log('10)', d1 == d2) // um é igual o outro?
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null) // é igual?
console.log('13)', undefined === null) // é restritamente igual