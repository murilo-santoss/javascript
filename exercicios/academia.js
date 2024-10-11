/**
 *  Ficha de um aluno de academia 
 * @author Murilo Dos Santos 
 */

// variaveis 
let nome 
let idade
let peso 
let altura 
let vip
let fcm
let imc

console.clear()
nome = "Murilo Dos Santos"
idade = 17
peso = 60
altura = 1.70
vip = true

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// saida 
console.log("Ficha do aluno")
console.log(`nome: ${nome}`)
console.log(`idade:${idade}`)
console.log(`peso:${peso}`)
console.log(`altura:${altura}`)
console.log(`vip :${vip}`)
console.log(`fcm:${fcm}`)
console.log(`imc:${imc.toFixed(2)}`)












// entrada de dados
nome = "murilo dos santos"
idade = 17
peso = 60
altura = 1.70
vip = true 

// saida
console.log ("ficha do aluno")
console.log(nome)
console.log(idade)
console.log(peso)
console.log(altura)
console.log(vip)
