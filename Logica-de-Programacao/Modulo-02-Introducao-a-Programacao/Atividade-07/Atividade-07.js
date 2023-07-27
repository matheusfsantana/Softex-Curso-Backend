const readline = require("readline-sync");

function calculadora() {

    let operador;

    while (operador != 0) {

        let n1 = readline.questionInt("Digite um número: ");
        let n2 = readline.questionInt("Digite outro número: ");
        operador = readline.questionInt("Escolha uma operação\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n0 - Sair\nEscolha: ");

        switch (operador) {
            case 1:
                console.log("Resultado = ", n1 + n2);
                break;

            case 2:
                console.log("Resultado = ", n1 - n2);
                break;

            case 3:
                console.log("Resultado = ", n1 * n2);
                break;

            case 4:
                console.log("Resultado = ", n1 / n2);
                break;

            case 0:
                break;

            default:
                console.log("Essa opção não existe");
                break;
        }
    }
}

calculadora();