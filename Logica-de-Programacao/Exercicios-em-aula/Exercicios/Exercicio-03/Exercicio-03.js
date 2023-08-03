const readline = require("readline-sync");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
let numero = readline.questionInt("Digite um número: ");

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
let por2 = numero2 % 2 == 0;
let por3 = numero2 % 3 == 0;
let por5 = numero2 % 5 == 0;
let frase = numero2 + " é divisivel por: ";

if(por2 || por3 || por5)
{
    if(por2){
        frase += "2 ";
    }
    if(por3)
    {
        frase += "3 ";
    }
    if(por5)
    {
        frase += "5";
    }
    frase+= "!";
    console.log(frase);
}else
{
    console.log("Não é divisivel por 2, 3 nem 5");
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

por2 = numero4 % 2 == 0;
por3 = numero4 % 3 == 0;
por5 = numero4 % 5 == 0;
let por7 = numero4 % 7 == 0;
frase = numero4 + " é divisivel por: ";

if (por2 || por3 || por5 || por7)
{
    if(por2)
    {
        frase += "2 ";
    }
    if(por3)
    {
        frase += "3 ";
    }
    if(por5){
        frase += "5 ";
    }
    if(por7)
    {
        frase += "7";
    }
    frase += "!";
    console.log(frase);
}else{
    console.log(numero4, " não é divisivel por 2,3, 5 ou 7!");
}