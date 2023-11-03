const prompt = require('prompt-sync')()
var opcao = parseInt(prompt('Informe o produto em numero: '))

switch (opcao) {
    case 1:
        console.log('O produto é um Caderno')
        break;
    case 2:
        console.log('O produto é um Lápis')
        break;
    case 3:
            console.log('O produto é uma Borracha')
        break;
        case 4:
            console.log('O produto é uma lapiseira')
        break;
        case 5:
            console.log('O produto é um Grafite')
        break;

    default:
        console.log('Diversos')
        break;
}
