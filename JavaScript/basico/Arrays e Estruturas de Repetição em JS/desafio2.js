//Criar um programa que percorra uma lista de numeros e imprimata cada numero par

const numeros = [ 5, 8, 6, 9, 7, 0, 1, 3, 2];

for (let i = 0; i <numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i]);
    }
}