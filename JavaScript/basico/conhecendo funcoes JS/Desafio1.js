// Aplicando funções no código abaixo:


// const precoProduto = 830;
// const tipoPagamento = 4;

// //classificação de desconto sobre método de pagamento
// if (tipoPagamento === 1) {
//     console.log("Total da compra: " + (precoProduto * 0.90).toFixed(2));
// } else if (tipoPagamento === 2) {
//     console.log("Total da compra: " + (precoProduto * 0.85).toFixed(2));
// } else if (tipoPagamento === 3) {
//     console.log("Total da compra: " + precoProduto);
// } else {
//     console.log("Total da compra: " + (precoProduto * 1.10).toFixed(2));
// }

//-------------------------------------------------------------

function calcularPreco(precoProduto, tipoPagamento){
    
    var valorFinal = classificarPreco(precoProduto, tipoPagamento);

    return valorFinal;
}

function classificarPreco(precoProduto, tipoPagamento) {
    if (tipoPagamento === 1) {
        return "Total da compra: " + (precoProduto * 0.90).toFixed(2);
    } else if (tipoPagamento === 2) {
        return "Total da compra: " + (precoProduto * 0.85).toFixed(2);
    } else if (tipoPagamento === 3) {
        return "Total da compra: " + precoProduto;
    } else {
        return "Total da compra: " + (precoProduto * 1.10).toFixed(2);
    }
}

console.log(calcularPreco(100, 1));

