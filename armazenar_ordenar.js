const prompt = require('prompt-sync')()

var numeros = [] // array vazio
var cont = 0
var numero
 while (cont < 10) {
    numero = parseInt(prompt(`Informe o ${cont + 1}º  `))
    numeros[cont] = numero
    cont++
}
numeros.sort()
console.log(numeros)