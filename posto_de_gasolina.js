const prompt = require('prompt-sync')()

var qtdLitro, valorAPagar, desconto, opcao
opcao = prompt('A - Alcool | G - Gasolina: ').toUpperCase()
qtdLitro = parseFloat(prompt('Informe a quantidade de litros: '))

switch (opcao) {
    case 'A':
        if(qtdLitro <= 20){
            valorAPagar = qtdLitro * 2.90
            desconto = valorAPagar - (valorAPagar * 0.05)
            console.log(`Seu valor com desconto de 3% é de R$ ${desconto}`)
        }else {
            valorAPagar = qtdLitro * 2.90
            desconto = valorAPagar - (valorAPagar * 0.03)
            console.log(`Seu valor com desconto de 5% é de R$ ${desconto}`)
        }
        break;
    
    case 'G':
        if(qtdLitro <= 20){
            valorApagar = qtdLitro * 3.30
            desconto = valorApagar - (valorApagar * 0.04)
            console.log(`Seu valor com desconto de 4% é de R$ ${desconto}`)
        }else {
            valorApagar = qtdLitro * 3.30
            desconto = valorApagar - (valorApagar * 0.06)
            console.log(`Seu valor com desconto de 6% é de R$ ${desconto}`)
        }
        break;

    default:
        console.log('Opção informada é invalida, escolha entre A ou G')
        break;
}