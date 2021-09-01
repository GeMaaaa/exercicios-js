const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' //sem template string

//eu não posso quebrar uma linha numa string se não irá dar erro no codigo

//mas no templatestring sim

//ele irá considerar a quebra de linha e fará aparecer no console
const template = `
    olá
    ${nome}!`//o $ faz que interprete o nome dentro e substitua o mesmo, no "nome" estava rebeca, então ele pegou esse valor e fez aparecer ele na hora de rodar o codigo
console.log(concatenacao, template)//isso não são aspas, é o simbolo da crase

//expressões...
console.log (`1 + 1 = ${1 + 1}`) //o que você colocar entre chaves ele vai tentar interpretar

const up = texto => texto.toUpperCase()// up é para deixar maiusculo
console.log(`Ei... ${up('cuidado')}!`) //a expressão dentro de um template string começa com $ {} e () se tiver função vai entre chave e ()

