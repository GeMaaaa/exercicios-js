var funcs = [] //pode se usar const

for (var i =0; i < 10; i ++) {//vai de 0 até 10, até sair do laço
    funcs.push(function() {//prencher array, push adiciona um novo elemento, aqui vamos usar função anonima e depois referenciar ela apartir do array
        console.log(i)
    })
}

funcs[2]()
funcs[8]()