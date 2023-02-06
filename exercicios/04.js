/*Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

let doisValores = (dividendo, divisor) => {
    console.log(`Resultado : ` + Math.floor(dividendo/divisor) + ` Resto : ${dividendo % divisor}`)
}

doisValores(11, 4)