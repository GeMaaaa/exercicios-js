/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

/*
Formula juros simples

J = C . I . T

J == JUROS SIMPLES
C == CAPITAL INICIAL
I == TAXA DE JUROS
T == TEMPO DE APLICAÇÃO
*/
function jurosSimples(capitalInicial, taxaDeJuros, TempoDeAplicacao) {
    return capitalInicial + (capitalInicial * taxaDeJuros * TempoDeAplicacao)
}

console.log(jurosSimples(1.200, 2/100, 14));

/* 
Formula de juros composto

M = X . (1 + I)ºN (AO QUADRADO)
M = C + J
J = M - C

M == MONTANTE
C == CAPITAL APLICADO OU VALOR INICIAL
I == TAXA DE JUROS COMPOSTO
N == TEMPO DE APLICAÇÃO
J == JURO COMPOSTO
*/
function jurosComposto(capitalInicial, taxaDeJuros, TempoDeAplicacao) {
    return capitalInicial * (1 + taxaDeJuros) ** TempoDeAplicacao
}

console.log(jurosComposto(620, 1.5/100, 24).toFixed(2))
