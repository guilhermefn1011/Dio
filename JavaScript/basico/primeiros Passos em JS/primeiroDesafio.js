
// Faça um programa para calcular o valor gasto de combustível em uma viagem.

// Utilizar 3 variáveis:
//     Preço do combustível.
//     Consumo de combustível do veículo.
//     Distância em KM do percurso.

// Imprima no console qual será o custo para realizar o percurso.

var valorCombustivel = 4.79;
var mediaCarro = 9;
var distanciaViagem = 269;

var custoViagem = (distanciaViagem / mediaCarro) * valorCombustivel;

console.log(custoViagem.toFixed(2));

//teste com os valores do curso

valorCombustivel = 5.79;
mediaCarro = 10;
distanciaViagem = 100;

custoViagem = (distanciaViagem / mediaCarro) * valorCombustivel;

console.log(custoViagem.toFixed(2));


