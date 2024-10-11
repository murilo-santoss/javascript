/**
 * 
 * @author murilo dos santos
 */

const input = require ('readline-sync')

let etanol, gasolina

console.clear()
console.log("qual vale mais apena etanol x gasolina ")

etanol = Number(input.question("digite o valor do etanol :"))
gasolina = Number(input.question("digite o valor da gasolina :"))

if (etanol < 0.7 * gasolina) {
    console,log("abastecer com etanol")
} else {
    console.log("abastecer com gasolina")
}



