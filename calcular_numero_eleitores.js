const prompt = require('prompt-sync')()

var totalEleitores, totalVotoBranco, totalVotNulo, totalVotoValidos
totalEleitores = 1000
totalVotoBranco = 60
totalVotNulo = 100
totalVotoValidos = totalEleitores - totalVotoBranco - totalVotoNulo

console.log(`Total de votos branco ${totalVotoBranco * 100 / 1000}%`)
console.log(`Total de votos nulo  ${totalVotoNulo * 100 / 1000}%`)
console.log(`Total de votos branco ${totalVotoValidos * 100 / 1000}%`)
console.log(`Totalizando ${totalEleitores} eleitores(s)`)






