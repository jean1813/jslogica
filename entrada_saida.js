const input = require('prompt-sync')()// criando uma nova instancia

var nome = input('Qual è o seu nome? ')
var idade = input('Qual è a sua idade? ')
var sexo = input('Qual è a sua sexo? ')


console.log(`O seu nome é ${nome}`)
console.log(`A sua idade é ${idade}`)
console.log(`O sexo  é ${sexo}`)