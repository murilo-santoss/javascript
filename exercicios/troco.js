/**
 * Calculo do valor do troco
 * @author murilo dos santos
 */

const input = require("readline-sync")

let compra, valorPago, troco

console.clear()
console.log("calcular o troco de uma compra")

// entrada
compra = Number(input.question("digite o valor da compra :"))
valorPago = Number(input.question("digite o valor pago :"))

// processamento
troco = valorPago - compra

//saida
console.log(`total do troco : R$ ${troco.toFixed(2)}`)