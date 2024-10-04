/**
 * PDV
 * @author murilo dos santos
 */

const input = require('readline-sync')

//variaveis
let total, desconto, totalDesconto, valorDesconto, valorPago, troco

console.clear()

console.log("____  ____ _    __")
console.log("/ __ \\/ __ \\ |  / /")
console.log("/ /_/ / / / / | / /") 
console.log("/ ____/ /_/ /| |/ /")  
console.log("/_/   /_____/ |___/")   
console.log("")                

// entrada 1
total = Number(input.question("digite o valor total da compra :"))
desconto = Number(input.question("digite o valor do desconto em % :"))

// processamento 1
valorDesconto = (desconto * total) / 100

// processamento 2
totalDesconto = total - valorDesconto

// saida 1
console.log("")
console.log("-------------")
console.log(`total : R$ ${total.toFixed(2)}`)
console.log(`Desconto : ${desconto}%`)
console.log(`valor do desconto : R$ ${totalDesconto.toFixed(2)}`)
console.log(`total do desconto : R$ ${totalDesconto.toFixed(2)}`)
console.log("")

// entrada 2
valorPago = Number( input.question("valor em dinheiro pago pelo cliente :"))

// processamento 3
troco = valorPago - totalDesconto

// saida 2
console.log("")
console.log(`valor pago em dineiro : R$ ${valorPago.toFixed(2)}`)
console.log(`troco : R$ ${troco.toFixed(2)}`)
console.log("---------------------------")



                               
                               
