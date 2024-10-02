/**
 * calculo do volume de um aquario
 * @author murilo dos santos
 */

const input = require (`readline-sync`)

//variaveis
let comprimento, largura, altura, volume

console.clear()
console.log("calculo do volume de um aquario")

// entrada
comprimento = Number(input.question("digite o comprimento em cm :"))
largura = Number(input.question("digite a largura em cm :"))
altura = Number(input.question("digite a altura em cm :"))

// processamento
volume = (comprimento * largura * altura) / 1000

// saida
console.log(`volume do aquario :  ${volume.toFixed(2)} litros`)