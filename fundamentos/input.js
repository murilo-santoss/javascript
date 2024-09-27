/**
 * input de dados via terminal
 * uso do pacote read-line-sync
 * @author murilo dos santos
 */

// importar o pacote
const input = require(`readline-sync`)

let nome

console.clear()

nome = input.question("digite o seu nome:")
console.log(`hello ${nome}`)
