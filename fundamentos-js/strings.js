const escola = "Cod3r"

console.log(escola.charAt(4)) //isso retorna o que está na posição 4
console.log(escola.charAt(5))
//então irá retornar a letra r, se selecionar uma letra que não está
//aparecendo ela vai retornar um valor vazio

console.log(escola.charCodeAt(3))//pegar o valor dele na tabela asc
//ou unicode, retorna o valor d html
//ele foi no numero 3 e retornou o que ele representa na tabela do codigo

//é possivel fazer o inverso tbm
console.log(escola.indexOf('3'))

console.log(escola.substring(1))//ele vai do indice 1 até o final, vai imprimir do O a diante
//restrição
console.log(escola.substring(0, 3))//vai do 0 até o 3, mas sem incluir o 3
//função de contatenar

console.log('Escola '.concat(escola).concat("!"))
//função que faz replace
console.log(escola.replace(3,'e'))//aqui está mudando o 3 por 'e' está na posição dele
//de outra forma
console.log(escola.replace(/\d/, 'e'))//aqui esta substituindo todos os numeros pela letra e
//outra forma
console.log(escola.replace(/\w/g, 'e'))//substituir todas as letras e numeros pela letra e, e esse g é de global

// '/\' isso é uma expressão regular


//convertendo para um array
console.log('Ana,Maria,Pedro'.split(','))

//outra forma de concatenar
console.log('Escola '+ escola + "!")//o + é aritimetico, se for string ele vai juntar e se for / ou * ou - ele vai
//executar na forma de divisão, multiplicação, ou subtração 
