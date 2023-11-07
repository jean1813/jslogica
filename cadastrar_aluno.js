const prompt = require('prompt-sync')()

let nome, continuar, confirmarSaida
let nomeAlunos = [] // Arrays

continuar = true

while(continuar) {
    nome = prompt('Informe o nome do aluno: ')
    nomeAlunos.push(nome) //inserir elementos no array

    confirmarSaida = prompt('Deseja continuar? S - sim | N - não \n ')
    if (confirmarSaida.toUpperCase() === 'N') {
        continuar = false
    }
}

for (let index = 0; index < nomeAlunos.length; index++) {
    console.log(nomeAlunos[index]) 
}