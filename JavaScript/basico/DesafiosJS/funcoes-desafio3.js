function print(texto) {
    console.log('salário depositado: R$' + texto)
}

function gets(valorBruto, beneficios) {
    const imposto = classificadorImposto(valorBruto);

    if (imposto === 'erro') {
        console.log('Valor inserido inválido');
    } else {
        let salario = valorBruto - (valorBruto * imposto) + beneficios;

        return salario
    }
}

function classificadorImposto(valor) {
    if (valor > 0 && valor <= 1100 ) {
        return 0.05;
    } else if (valor > 1100 && valor <= 2500) {
        return 0.10;
    } else if (valor > 2500 ) {
        return 0.15;
    } else {
        return 'erro'
    }
}


module.exports = {gets, print};