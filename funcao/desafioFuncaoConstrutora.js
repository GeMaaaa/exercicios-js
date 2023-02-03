function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Kai')
p1.falar()

//obs: usando o this eu posso alterar o nome, caso contrario, bao