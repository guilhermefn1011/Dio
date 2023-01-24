/*
    Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
    O salário deve ser transferido da seguinte maneira:

        valor bruto - percentual de imposto + adicional dos benefícios.
       
        Imposto:
            de 0 a 1100 = 5%;
            de 1100.01 a 2500 = 10%
            acima de 2500 = 15%

*/
const {gets, print} = require('./funcoes-desafio3');


print(gets(2000 , 250));