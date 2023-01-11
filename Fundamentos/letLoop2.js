const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

/*pelo falo de ter let e ter um escopo de bloco, no momento
que essa funcao foi definida, ele vai lembrar qual era o valor de i
naquele momento que foi criado*/

funcs[2]()
funcs[6]()
funcs[8]()