const prompt = require('prompt-sync')()
var preco, valorVenda, margemLucro

preco = 56000
margemLucro = 0.20
valorVenda = preco + (preco * margemLucro) + (preco * 0.28) + (preco * 0.45)
console.log(`Valor de carro seráde R$ ${valorVenda}`)

// com interação com o usuario

preco = parseInt(prompt('Inform o valor do carro: '))
margemLucro = parseFloat(prompt(`Informe a margem de lucro`))

