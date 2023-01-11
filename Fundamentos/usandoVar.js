/*
a variavel var nao e acessivel quando esta dentro de uma
funcao, a nao ser dentro dela mesma. mas fora dela pode 
ser acessada de qualquer lugar
*/
{
    {
        {
            {
               var sera = 'será??'
               console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)


/* vai sobrescrever por que var e global.

var numero = 1
     {
         var numero = 2
     }
     console.log(numero) */
