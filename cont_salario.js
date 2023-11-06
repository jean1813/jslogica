const prompt = require('prompt-sync')()

var salario, tempoTrabalho, resultado, continuar

continuar = true  // valor booleano

while(continuar){
    salario = parseFloat(prompt('Informe o salario: '))
    tempoTrabalho = parseInt(prompt('Informe o tempo de trabalho em anos: '))
    
    
    if(tempoTrabalho >= 5 ) {
        resultado = (salario * 0.2) + salario
    }  else {
        resultado = (salario * 0.1) + salario
    }
    console.log(`Em ${tempoTrabalho} anos de trabalho, seu salario será de R$ ${resultado}`)
    continuar = prompt('Deseja sair do sistema? S - sim | N - não')
    if (continuar.toUpperCase() === 'S') {
        continuar = false
        
    }
}