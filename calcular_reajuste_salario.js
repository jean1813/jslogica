const prompt = require('prompt-sync')()

var salarioMensal, desconto, reajustePercentual, resultado

salarioMensal  = 3000
reajustePercentual = 8
desconto = (salarioMensal - reajustePercentual) / 100
resultado = salarioMensal - desconto


//resultado = salarioMensal - (salarioMensal * reajustePercentual) / 100

console.log(`Seu salario de R$ ${salarioMensal.toFixed(2)}`)
console.log(`Seu Desconto na folha será de R$ ${desconto.toFixed(2)}`)
console.log(`Seu Salario será de R$ ${resultado.toFixed(2)}`)

//console.log(`Seu salario será de R$ ${resultado}`)

