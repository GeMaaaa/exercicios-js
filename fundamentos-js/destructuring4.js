function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // se min for maior que max inverta, e se max for menor que min, inverta
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())