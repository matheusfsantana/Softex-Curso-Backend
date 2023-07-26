const readline = require("readline-sync");

function calculadora(n1, n2, operador) {

    switch (operador) {
        case 1:
            return n1 + n2;

        case 2:
            return n1 - n2;

        case 3:
            return n1 * n2;

        case 4:
            return n1 / n2;

        default:
            return 0;
    }
}

let n1 = readline.questionInt("Digite um número: ");
let n2 = readline.questionInt("Digite outro número: ");
let operador = readline.questionInt("Escolha uma operação\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nEscolha: ");

let resultado = calculadora(n1,n2,operador);

console.log("Resultado: " , resultado);