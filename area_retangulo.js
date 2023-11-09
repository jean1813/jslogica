const prompt = require('prompt-sync')()
var base, altura, area,  continua, opcao
contiuna = true
while (continua) {
    base = parseInt(prompt('Informe o valor da base: '))
    altura = parseInt(prompt('Informe o valor da altura: '))
    area = base * altura
    console.log(`A area do retangulo é ${area}`)
    opcao = prompt('Deseja continuar: S - Sim | n - Nao')
    if (opcao.toUpperCase() ==='N') {
        continua = false
    }
}

