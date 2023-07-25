const rl = require("readline-sync");

let diaSemana = rl.questionInt("Digite de 1 a 7 o dia da semana: ");

switch(diaSemana){
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;
    
    case 3: 
        console.log("Terça-feira");
        break;
    
    case 4: 
        console.log("Quarta-feira");
        break;

    case 5:
        console.log("Quinta-feira");
        break;

    case 6:
        console.log("Sexta-feira");
        break;

    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia da semana inválido!");
        break;
}

let mes = rl.questionInt("Digite de 1 a 12 o número de um mês: ");

switch(mes){
    case 1:
        console.log("Janeiro");
        break;

    case 2:
        console.log("Fevereiro");
        break;
    
    case 3: 
        console.log("Março");
        break;
    
    case 4: 
        console.log("Abril");
        break;

    case 5:
        console.log("Maio");
        break;

    case 6:
        console.log("Junho");
        break;

    case 7:
        console.log("Julho");
        break;

    case 8:
        console.log("Agosto");
        break;

    case 9:
        console.log("Setembro");
        break;

    case 10:
        console.log("Outubro");
        break;

    case 11:
        console.log("Novembro");
        break;

    case 12:
        console.log("Dezembro");
        break;

    default:
        console.log("Mês inválido!");
        break;
}


let estadoCivil = rl.question("Digite seu estado civil: ");

switch(estadoCivil){
    case "solteiro":
        console.log("Você ainda vai encontrar seu/sua amado(a) :)");
        break;

    case "casado":
        console.log("Felicidades ou sinto muito");
        break;

    case "divorciado":
        console.log("Sinto muito ou parabens");
        break;

    default:
        console.log("Outro");
        break;
}

let animal = rl.question("Digite um tipo de animal: ");

switch(animal)
{
    case "cachorro":
        console.log("Au au");
        break;
    
    case "gato":
        console.log("Miau");
        break;

    case "pássaro":
        console.log("Fiu fiu");
        break;
    
    default:
        console.log("Não conheço esse animal");
        break;
}

let numero1 = rl.questionInt("Digite um número: ");
let numero2 = rl.questionInt("Digite outro número: ");
let operador = rl.question("Digite o simbolo da operação (+ , - , * , /): ");

switch(operador){
    case operador = "+":
        console.log(numero1+numero2);
        break;
    
    case operador = "-":
        console.log(numero1-numero2);
        break;

    case operador = "*":
        console.log(numero1*numero2);
        break;

    case operador = "/":
        console.log(numero1/numero2);
        break;

    default:
        console.log("Operador inválido");
        break;

}