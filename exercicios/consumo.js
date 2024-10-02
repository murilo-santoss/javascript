/**
 * Calculo do consumo de combustivel
 * @author murilo dos santos
 */

const input = require ('readline-sync')

let distancia, litros, consumo

console.clear()
console.log(" calculo do consumo de combustivel")

// entrada
distancia = Number(input.question("distancia percorrida em km : "))
litros = Number(input.question("quantidade de litros de combustivel : "))


//processamento
consumo = distancia / litros

// saida
console.log(`consumo do aquario :  ${consumo.toFixed(2)} km/l`)