const prompt = require('prompt-sync')()

let lista = ['Pera', 'Uva', 'Jaca', 'Mamão', 'Melancia', 'Abacate']

let cont = 0

//usando o while e for dentro do arrays

while (cont < lista.length) {
    console.log(lista[cont])
    cont++
  }
for (let cont = 0; cont < lista.length; cont++) {
    console.log(`${cont + 1} - ${lista[cont]}`) 
}