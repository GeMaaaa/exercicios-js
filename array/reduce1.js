const alunos = [
    { nome: 'kaique', nota: 7.3, bolsista: false },
    { nome: 'maiara', nota: 9.2, bolsista: true },
    { nome: 'kakau', nota: 9.8, bolsista: false },
    { nome: 'josephe', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))