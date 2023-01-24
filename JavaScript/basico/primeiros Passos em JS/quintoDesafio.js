/* Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    classificação da condição de pagamento:
    1- À vista Debito, 10% de desconto;
    2- À vista Dinheiro ou PIX, 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 830;
const tipoPagamento = 4;

//classificação de desconto sobre método de pagamento
if (tipoPagamento === 1) {
    console.log("Total da compra: " + (precoProduto * 0.90).toFixed(2));
} else if (tipoPagamento === 2) {
    console.log("Total da compra: " + (precoProduto * 0.85).toFixed(2));
} else if (tipoPagamento === 3) {
    console.log("Total da compra: " + precoProduto);
} else {
    console.log("Total da compra: " + (precoProduto * 1.10).toFixed(2));
}

