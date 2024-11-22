/**
 * Estrutura de dados 
 * @author murilo dos santos
 */

console.clear()

const funcionariol = {}
console.log(typeof(funcionariol))
// adicionar dados a estrutura
funcionariol.none = "murilo"
funcionariol.cargo = "professor"
funcionariol.email = "murilominharro@gmail.com"
funcionariol.salario = 8000
funcionariol.insta = "@murilominharro"
console.log(funcionariol)
//listar os dados da estrutura
console.log(funcionariol)
console.log(funcionariol.cargo)
//modificar os dados da estrutura
funcionariol.none = "murilo dos santos"
console.log(funcionariol)
//excluir dados da estrutura
delete funcionariol.insta
console.log(funcionariol)

const funcionario2 = {
    nome: "bruce wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 400000

}
console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova jersey",
}

console.log(endereco1)

const funcionario3 = {

nome: "Alfred pennywort",
cargo: "mordono",    
email: "alfred@gmail.com",
salario: 20000,
...endereco1
}
console.log(funcionario3)

const funcionario4 = {

    nome: "Dick Grayson",
    cargo: "acrobata",    
    email: "robin@gmail.com",
    salario: 2000,
    ...endereco1
    }
    console.log(funcionario4)

    const funcionario5 = {
        nome: "Tony Stark",
        cargo: "engenheiro",
        email: "ironman@gmail.com",
        salario: 375000,
        armadura: {
            versao: "Mark II",
            ano: 2010,
            reator: "Arc 01",
        },
        suitUp: () => {
            console.log("🤖")
        }
    }

    console.log(funcionario5)
    console.log(funcionario5.cargo)
    console.log(funcionario5.armadura.versao)
    funcionario5.suitUp()//executar a função interna da estrutura