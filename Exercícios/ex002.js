class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}


const pedro = new Pessoa("Pedro", 21);
const rui = new Pessoa("Rui", 20);

console.log(pedro.nome, pedro.idade);
console.log(rui.nome, rui.idade);