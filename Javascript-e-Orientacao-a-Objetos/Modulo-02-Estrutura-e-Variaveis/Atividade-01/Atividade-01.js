// Crie um programa de calculadora que:

// - receba dois valores, que devem ser salvos em variáveis; 
// - o usuário deve colocar qual operador ele vai utilizar por meio dos simbolos aritmeticos
// - com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
// - se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.  

const rl = require('readline-sync');

console.log("Calculadora");
let numero1 = rl.questionInt("Digite um número inteiro: ");
let numero2 = rl.questionInt("Digite outro número inteiro: ");
let operador = rl.question("Escolha uma operação (+, -, *, /):  ");

switch(operador){
    case '+':
        console.log("Resultado da soma: ", numero1+numero2);
        break;

    case '-':
        console.log("Resultado da subtração: ", numero1-numero2);
        break;
    
    case '*':
        console.log("Resultado da multiplicação: ", numero1*numero2);
        break;

    case '/':
        let resultado = Math.floor(numero1/numero2); //Resultado da visão inteiro
        let sobra = numero1%numero2;

        console.log("Resultado: ", resultado," Resto da divisão: ", sobra);
        break;

    default:
        console.log("Operador inválido...");
        break;
}
