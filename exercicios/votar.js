/**
 * sistema de voto
 * @author murilo dos santos
 */

const input = require ('readline-sync')

let idade

console.clear()

console.log("verificar maioridade")
idade = Number(input.question("digite a sua idade :"))
console.log(`idade: ${idade}`)

if (idade < 16 ) {
    console.log ("proibido votar")
} else if (idade > 17 && idade < 71) {
    console.log ("voto obrigatorio")
}    else if (idade === 16 || idade === 17 || idade > 70) {
    console.log ("voto facultativo")
  }