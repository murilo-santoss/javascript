/**
 * calculo do consumo de água
 * @author murilo dos santos
 */

const input = require ('readline-sync')
console.log(typeof(input))

let consumo, peso

console.clear()

peso = Number(input.question(" digite o seu peso(kg) : "))

consumo = peso * 0.035

console.log(`Consumo diário de água deve ser : ${consumo.toFixed(2)}`)