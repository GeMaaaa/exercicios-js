let numero = 1 //o let respeita o escopo, porém se aqui fosse "var" também seria respeitado o padrão, var e let não se misturam
{
    let numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)
