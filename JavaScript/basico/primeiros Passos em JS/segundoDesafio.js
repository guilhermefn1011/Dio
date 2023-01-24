// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//     1- Preço do etanol;
//     2- Preço da gasolina;
//     3- Tipo de combustível que o veículo utiliza;
//     4- Gasto médio de combustível por Km do veículo;
//     5- Distância em Km do percurso;

// Imprima no console o custo para realizar a viagem.

var valorEtanol = 3.79;
var valorGasolina = 4.89;
var tipoCombustivel = "etanol";
var ConsumoMedioPorKm = 8;
var distanciaPercurso = 387;
var custoPercurso;

if (tipoCombustivel == "gasolina") {
  custoPercurso = (distanciaPercurso / ConsumoMedioPorKm) * valorGasolina;
  console.log(custoPercurso.toFixed(2));
} else if (tipoCombustivel == "etanol") {
  custoPercurso = (distanciaPercurso / ConsumoMedioPorKm) * valorEtanol;
  console.log(custoPercurso.toFixed(2));
} else {
  console.log("Tipo de combustível inválido");
}

//Testes de validação com os valores utilizados no vídeo da aula
valorEtanol = 5.79;
valorGasolina = 6.66;
tipoCombustivel = "etanol";
ConsumoMedioPorKm = 10;
distanciaPercurso = 100;

if (tipoCombustivel == "gasolina") {
  custoPercurso = (distanciaPercurso / ConsumoMedioPorKm) * valorGasolina;
  console.log(custoPercurso.toFixed(2));
} else if (tipoCombustivel == "etanol") {
  custoPercurso = (distanciaPercurso / ConsumoMedioPorKm) * valorEtanol;
  console.log(custoPercurso.toFixed(2));
} else {
  console.log("Tipo de combustível inválido");
}
