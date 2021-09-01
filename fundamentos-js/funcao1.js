//Função sem retorno
function imprimirSoma(a, b, c)
{
    console.log(a + b + c)
}

imprimirSoma(5, 5, 5) //soma normal do espaço que foi determinado
imprimirSoma(7, 1)//not a number pois falta o terceiro numero que esstá indefinido
imprimirSoma(5, 5, 9, 4, 6, 7)//soma os 3 primeiros
imprimirSoma()//irá dar not a number, pois nenhum está definido

//Função com retorno
function soma(a, b =0)//quando se retorna um valor, use o console.log para imprimir na tela
{
    return a + b
}

//soma(2, 3) isso não iria funcionar pois a função está retornando um valor
console.log(soma(2, 3))// para dar certo precisa botar a função dentgro do console.log
