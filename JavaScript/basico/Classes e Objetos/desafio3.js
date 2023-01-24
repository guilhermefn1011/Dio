/*
    Crie uma classe para representar pessoas.
    Cada pessoa deve conter nome, altura e peso.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC;
    ++ Capacidade de classificar seu IMC;
*/

class Pessoa {
    nome;
    altura;
    peso;

    constructor (nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc () {
        return this.peso / (Math.pow(this.altura, 2));
        
        // const imc = this.peso / (Math.pow(this.altura, 2));
        // return `${this.nome}, o seu IMC é: ${imc.toFixed(2)}`;
      
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Acima do peso";
        } else if (imc >= 30 && imc < 40) {
            return "Obesidade";
        } else {
            return "Obesidade grave";
        }
    }
}

const jose = new Pessoa ('José', 1.75, 70);

console.log(jose.classificarImc());
