let par = [];
let impar = [];


function print(texto) {
    console.log(texto)
}

function gets(numeros) {
    classificadorTipoNumeros(numeros);

    let mPar = maiorPar(par);
    let mImpar = menorImpar(impar);

    return `maior par = ${mPar} e menor impar = ${mImpar}`
}

function classificadorTipoNumeros(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            par.push(numeros[i])
        } else {
            impar.push(numeros[i])
        }
    }
}

function maiorPar(par) {
    let maiorPar = par[0];

    for (let i = 0; i < par.length; i++) {
        if (maiorPar <  par[i]) {
            maiorPar = par[i]
        }
    }
    return maiorPar;
}

function menorImpar() {
    let menorImpar = impar[0];

    for (let i = 0; i < impar.length; i++) {
        if (menorImpar >  impar[i]) {
            menorImpar = impar[i]
        }
    }
    return menorImpar;
}
module.exports = {gets, print};