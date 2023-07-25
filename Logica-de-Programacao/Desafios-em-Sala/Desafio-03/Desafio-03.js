const readline = require("readline-sync");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  
let numero = readline.questionInt("Digite um número: ");

console.log(-2 % 2 == 0)

// 1.
if (numero == 0){
    console.log(numero, " é zero!");
}else if(numero > 0){
    console.log(numero, " é positivo!");
}else{
    console.log(numero, " é negativo!");
}

//2.

let numero2 = readline.questionInt("Digite um número: ");

if (numero2 % 2 == 0 || numero2 % 3 == 0 || numero2 % 5 == 0)
{
    console.log(numero2, " é divisivel por 2, 3 ou 5!");

}else{
    console.log(numero2, " não é divisivel por 2,3 ou 5!");
}

//3.

let variavel = [true, false, "string", 1, -1, 5, undefined]
let resultado = variavel[getRandomInt(0,7)]

console.log(resultado, " é ", typeof(resultado));

//4.
let numero3 = readline.questionInt("Digite um número: ");

if(numero3 == 0)
{
    console.log(numero3, " é zero!");
}else if(numero3 > 0 && numero3 % 2 == 0)
{
    console.log(numero3, " é positivo e par!");

}else if(numero3 > 0 && numero3 % 2 != 0)
{
    console.log(numero3, " é positivo e ímpar!");

}else if(numero3 < 0 && numero3 % 2 == 0){
    console.log(numero3, " é negativo e par!");
}else{
    console.log(numero3, "é negativo e ímpar!");
}

//5.

let numero4 = readline.questionInt("Digite um número: ");

if (numero4 % 2 == 0 || numero4 % 3 == 0 || numero4 % 5 == 0 || numero4 % 7 == 0)
{
    console.log(numero4, " é divisivel por 2, 3, 5 ou 7!");

}else{
    console.log(numero4, " não é divisivel por 2,3, 5 ou 7!");
}