const entradas = [];

function gets (numero) {
    let arrayNumeros = geradorNumeros(numero);
    
    let maior = maiorNumero(arrayNumeros);

    return `Números gerados: ${arrayNumeros}, maior número: ${maior}`;
}

function print(texto) {
    console.log(texto);
}

//gerador de conjunto de números aleatórios
function geradorNumeros (numero) {
    for (let i = 0; i < numero ; i++) {
        entradas.push(getRandomIntInclusive(0, 100));
    }
    return entradas;
}

//números aleatórios inteiros com min e max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Define qual é o maior número de um array
function maiorNumero(entrada) {
    let numeroMaior = entrada[0]
    cont = entrada.length;
    for (let i = 0; i <= cont; i++) {
        if (entrada[i] > numeroMaior) {
            numeroMaior = entrada[i]
        }
    }
    return numeroMaior;
}


module.exports= {gets, print}