const pessoa = {
    saudacao: 'Bao dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre PARADIGMAS: funcional e OO

//com o bind o this sempre apontara para pessoa
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()