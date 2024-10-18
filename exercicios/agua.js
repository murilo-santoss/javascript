/**
 * calculo do consumo de água
 * @author murilo dos santos
 */

const input = require ('readline-sync')

let consumo, peso

console.clear()

peso = Number(input.question(" digite o seu peso : "))

consumo = peso * 0.035

console.log(`Consumo diário de água deve ser : ${consumo.tiFixed(3)}`)