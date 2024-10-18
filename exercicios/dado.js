/**
 * exemplo de uso do metodo para gerar numeros aleatórios jogo do dado
 * @author murilo dos santos
 */

const input = require('readline-sync')

let face

console.clear()
console.log("jogo do dado")
input.question("pressione a tecla [Enter] para jogar o dado")

// Sorteio da face de um dado
// Math classe matematica
// floor() conversão para numeros inteiros
//random() * (gerador de numeros aleatorios)

face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5
console.log(`Face do dado: ${face}`)