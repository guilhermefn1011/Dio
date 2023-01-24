/*Elaborar um classificador de IMC conforme a tabela abaixo:

Formula IMC:
IMC = peso / (altura²)


Classificação IMC em Adultos:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 Obesidade grave;
*/

var peso = 132;
var altura = 1.72;

//calculo da formula do imc
var imc = peso / Math.pow(altura, 2);
console.log("IMC:" + imc.toFixed(2));

//classificação do peso
if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
    console.log("Obesidade");
} else {
    console.log("Obesidade grave");
}