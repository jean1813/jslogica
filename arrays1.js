const prompt = require('prompt-sync')()

let lista = ['Pera', 'Uva', 'Jaca', 'Mamão', 'Melancia', 'Abacate']

let tamanho
lista.push('Abacaxi')

tamanho = lista.length // para informar o tamanho do array
// lista.sort() // colocar os elementos em ordem alfabetica
// lista.lastIndexOf('Jaca') //Informa a sua posição
lista.splice(2, 1, 'Manga') //substitui elementos no array, onde o 1° parametro

