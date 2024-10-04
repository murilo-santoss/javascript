/**
 * Calculo do valor do desconto
 * @author murilo dos santos
 */

const input = require ('readline-sync')

let totaldesconto, valor, desconto

console.clear()
console.log("calculo do valor do desconto")

// entrada
total = Number(input.question("digite o valor da compra :"))
desconto = Number(input.question("digite o valor do desconto em % :"))

// processamento
totalDesconto = total - ((desconto * total) / 100)

//saida
console.log(`total do desconto : R$ ${desconto.toFixed(2)}`)