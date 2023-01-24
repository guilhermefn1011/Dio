class Pessoa {
    nome;
    idade;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        return `${p1.nome} é mais velho(a) que ${p2.nome}`;
    } else if (p1.idade < p2.idade) {
        return `${p2.nome} é mais velho(a) que ${p1.nome}` ;
    } else {
        return `${p1.nome} e ${p2.nome} tem a mesma idade`;
    }
}

const Vitor = new Pessoa('Vitor', 25);
const Caio = new Pessoa('Caio', 25);

console.log(compararPessoas(Vitor, Caio));

