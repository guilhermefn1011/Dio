/* 
    Crie uma classe para representar carros, os carros possuem marcas, cor e consumo médio de combustível.
    Crie um método que dada a distancia do percurso e o preço do combustível nos de o valor gasto em reais para realizar o percurso.
*/

class carro {
  modelo;
  marca;
  cor;
  consumeMedio;

  constructor(modelo, marca, cor, consumeMedio) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.consumeMedio = consumeMedio;
  }

  calcularGastoViagem(distancia, precoCombustivel) {
    const custoViagem = (distancia / this.consumeMedio) * precoCombustivel;

    return `Para realizar esta viagem com um ${this.marca} ${this.modelo}, custará em média R$${custoViagem.toFixed(2)} reais`;
  }
}

const Sandero = new carro("Sandero", "Renault", "Preeto", 11);

console.log(Sandero.calcularGastoViagem(329, 5.7));