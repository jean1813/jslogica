const prompt = require('prompt-sync')()

continuar = true

while (continuar) {
nomeFunc = prompt('Nome do funcionario: ')
anoNascFunc = prompt('Ano de nascimento: ')
anoTrabFunc = prompt('Ano de admissão: ')

idadeFunc = 2023 - anoNascFunc
tempoServiço = 2023 - anoTrabFunc


if (idadeFunc >= 60 && tempoServiço >= 25) {
    console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e atua à ${tempoServiço} anos de serviço - Requer Aposentadoria`)
} else if (idadeFunc >= 65){
    console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e atua à ${tempoServiço} anos de serviço - Requer Aposentadoria`)
} else if (tempoServiço >= 30) {
    console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e atua à ${tempoServiço} anos de serviço - Requer Aposentadoria`)
} else {
    console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e atua à ${tempoServiço} anos de serviço - Não Requer Aposentadoria`)
}
opção = prompt('Deseja continuar? S - sim | N - não ')
if(opção.toUpperCase() === 'N'){
   continuar = false
}

}
