/**
 * Tabuada 
 * @author Murilo dos santos
 */

const input = require (`readline-sync`)

let valor

console.clear()
console.log("Tabuada")
valor = Number(input.question("digite o valor da tabuada :"))
for (let i = 1; i < 11; i++){
    console.log(`${valor} x ${i}`)
}