const prompt = require('prompt-sync')()

let n = parseInt(prompt('Digite um numero de inicio: '))
let t = parseInt(prompt('Digite um numero de termino: '))


for (let cont; n<t; n++) {
    console.log(n)
}