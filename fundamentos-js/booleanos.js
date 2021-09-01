let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//se vc tm um valor v e coloca uma negação ele vira f, mas se vc botar ff ele volta sendo o original
isAtivo = 1
console.log(!!isAtivo)
//!=negação|!!isAtivo=true| !isAtivo=false |!true=false|!false=true
//o não(!)verdadeiro(true) é o falso(=false), e o não(!) falso(false) é o verdadeiro(=true)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)//todos os numeros inteiros são verdadeiros, menos o 0
console.log(!!' ')//o espaço sem nada escrito é true
console.log(!!'bingo')
console.log(!![])//array vazio é true
console.log(!!{})//objeto literal é true
console.log(!!Infinity)//tipo infinito se comporta como true

//situação d atribuição, o resultado vai ser não se a atribuição deu certo ou não, mas sim o resultado do "= true"
//se ele for resolvivel pra v o resultado vai ser v

console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))//true tbm

//vai dar falso pq está pegando o valor 0 e n se a atribuição deu certa ou n
console.log('o de baixo estará como falso, pq o valor é de zero')
console.log(!!(isAtivo = 0))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')//o vazio diferente do que foi mostrado acima, é false
console.log(!!null)
console.log(!!NaN)//NaN significa Not a Number, ou seja, não é um número
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!('' || null || 0 || ' '))//nesse caso ele retornará o unico valor true que é o espaço no ' '

//situação para preencher nome

let nome = ''
console.log(nome || 'Por favor, insira seu nome')// || significa 'ou'
//irá retornar o valor dentro de '' se caso o nome esteja vazio



