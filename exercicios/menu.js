/**
 * exemplo de uso da estrutura switch case
 * @author murilo dos santos
 */

const input = require(`readline-sync`)

let opcao

console.clear()
console.log("BOOT")
console.log("1. carregar o sistema windows")
console.log("2. carregar o sistema linux")

opcao = Number(input.question("digite a opcao desejada: "))

switch (opcao) {
    case 1:
        console.clear()
        console.log("carregando o sistema Windows .......")
        break
    case 2:
        console.clear()
        console.log("carregando o sistema Linux .......")
        break
    default:
        console.log("opção invalida")
}