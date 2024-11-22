/**
 * Desenvolvimento de uma calculadora
 * @author murilo dos santos
 */

const input = require(`readline-sync`)

let a, b, opcao
do {
    console.clear()
    console.log("Calculadora")

    console.log(" _____     _         _       _             ")
    console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
    console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
    console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")




    a = Number(input.question("Digite o primeiro numero: "))
    b = Number(input.question("Digite o sgundo numero: "))

    console.log("")
    console.log("1, Somar")
    console.log("2, Subtrair")
    console.log("3, Multiplicar")
    console.log("4, Dividir")
    console.log("5, Calcular a %")
    console.log("")
    opcao = Number(input.question("Digite a opcao desejada: "))


    switch (opcao) {
        case 1:
            Somar(a, b)
            break
        case 2:
            Subtrair(a, b)
            break
        case 3:
            multiplicar(a, b)
            break
        case 4:
            dividir(a, b)
            break
        case 5:
            porcentagem(a, b)
            break
        default:
            console.log("opcao invalida")
            break
    }

    console.log(" voce quer fazer um novo calculo s/n")
    opcao =input.question("")
  } while (opcao !== "n");


function Somar(a, b) {
    return console.log(`A soma de ${a} + ${b} = ${a + b}`)
}
function Subtrair(a, b) {
    return console.log(`A subtração de = ${a} - ${b} = ${a - b}`)

} function multiplicar(a, b) {
    return console.log(`A multiplicação de = ${a} * ${b} = ${a * b}`)

} function dividir(a, b) {
    return console.log(`divisão do calculo = ${a} / ${b} = ${a / b}`)

} function porcentagem(a, b) {
    return console.log(` ${a} % de ${b} é igual a ${(a * b) / 100}`)
}
