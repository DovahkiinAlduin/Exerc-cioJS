class Pessoa{}

Pessoa.prototype.falar = function() {
    console.log("Olá");
}

const pedro = new Pessoa;
const david = new Pessoa;

pedro.falar();
david.falar();