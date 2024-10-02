/**
 * Calculo da regra de 3
 * @author murilo dos santos
 */

const input = require ('readline-sync')

let x, y, valor

console.clear()
console.log("calculo da regra de 3")

// entrada
x = Number(input.question("digite o valor de x : "))
y = Number(input.question("digite o valor de y : "))

//processamento
valor = (x * y) / 100

// saida
console.log(`${x} % de ${y} ${valor.toFixed(2)}`)