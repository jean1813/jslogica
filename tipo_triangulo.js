const prompt = require('prompt-sync')()

 
var a = parseInt(prompt('Valor do lado 1:'))
b = parseInt(prompt('Valor do lado 2:'))
c = parseInt(prompt('Valor do lado 3:'))


if (a !== 0 && b !== 0 && c !== 0) {
    if (a !== b && a != c && b !== c) { // todos diferentes
        console.log(`O triangulo é isósceles`)
    } else if (a === b && c !== b && c !== a){ // dois lados iguais
        console.log(`O triangulo é isosceles`)
    } else if (a !== c && a !== b && b !== c) { // dois lados iguais
        console.log(`O triangulo é isosceles`)
   } else if (a === c && a !== b && b !== c){  // dois lados iguais
    console.log(`O triangulo é isosceles`)
   } else {
     console.log()
   }

    }
   
}
