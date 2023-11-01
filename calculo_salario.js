const prompt = require('prompt-sync')()

var salario = parseFloat(prompt('Informe o salario: '))
var tempo = parseInt(prompt('Informe o tempo de serviço em anos: '))


if(tempo >= 5 ) {                    
    console.log(`seu salario sera de ${(salario * 0.2) + salario}`)
   } else {
      console.log(`seu salario sera de ${(salario * 0.1) + salario}`)
    }
    