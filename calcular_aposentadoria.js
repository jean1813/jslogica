const prompt = require('prompt-sync')()

let nomeFunc = parseFloat(prompt('Nome do funcionario: '))
let anoNascFunc = parseInt(prompt('Ano de nascimento: '))
let anoTrabFunc = parseInt(prompt('Ano de admissão: '))

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