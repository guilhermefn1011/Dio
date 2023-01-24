// 1- Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade cacule e imprima a sua média e sua classificação conforma a tabela abaixo. 

// Classificação: 
// - Média menor que 5, reprovado;
// - Média entre 5 e 6,9, recuperação;
// - Média igual ou acima de 7, aprovado;

var nota1 = 5;
var nota2 = 3;
var nota3 = 7;

// calcula a média das notas
var mediaNota = (nota1 + nota2 + nota3) / 3;

console.log("Nota:" + mediaNota);

//realiza a classificação da média
if (mediaNota >= 7 ) {
    console.log("Aprovado");
} else if (mediaNota >= 5)  {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

