const prompt = require('prompt-sync')()

let a = parseInt(prompt('Digite a altura:'))
let b = parseInt(prompt('Digite a base:'))

areaRetangulo = a * b

console.log(`A area do retangulo é ${areaRetangulo}`)