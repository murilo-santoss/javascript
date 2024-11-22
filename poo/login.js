/**
 * Fundamentos da poo
 * Encapsulamento (segurança)
 * @author murilo dos santos
 */

console.clear()

class User{
    //atributos
    constructor(login, senha) {
        this.login = login
        // Encapsulamento
        let_senha = senha
        this.getsenha = () => _senha //leitura
        this.getsenha =  (novasenha) => _senha = novasenha // escrita 
    }
    //Metodo
    logar() {
        console.log("____________________")
        console.log(`Usuario: ${this.login}`)
        console.log(`Senha: ${this.getsenha}`)
        if (this.login === 'admin' && this.getsenha === '123@senac') {
            console.log("Usuario autenticado")
        } else {
            console.log("Usuario e/ou senha invalido(s)")
        }
    }
}

/******* Sistema *****/
// criando um novo objeto
const user1 = new User ("admin", "1234")
user1.logar()
user1.getsenha("123@senac")
user1.logar()