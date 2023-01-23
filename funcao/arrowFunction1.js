//se tem {} entao tem return
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olaaaa'
}

ola = () => 'OlAA'
ola = _ => 'Ola2' //possui um parametro
console.log(ola())