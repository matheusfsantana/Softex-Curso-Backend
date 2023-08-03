/*1- Imprima os numeros de 1 a 10
  2- Calcule a soma dos numeros de 1 a 100
  3- Conte e imprima a quantidade de numeros pares de 1 a 50
  4- Multiplque um número por 2 ate que o resultado seja maior que 1000
  5- Verifique se um numero é primo
  6- Faça o usuario digitar sua senha ate que seja digita a senha correta
  7- Imprima os multiplos de 3 de 1 a 30
  8- Calcule a média de uma lista de numeros
  9- Calcule o fatorial de um numero
  10- Imprima os numeros de 10 a 1 em ordem decrescente */

const readline = require("readline-sync");
//1
let i = 1;
let numero = readline.questionInt("Digite um número inteiro para eu contar de 1 até o número digitado: ");
while(i <= numero){
    console.log(i);
    i++;
}

//2
console.log("\nSoma de 1 a 100");
let c = 1;
let soma=0;
while(c <= 100)
{
    soma += c;
    c++;
}
console.log(soma);

//3
let j = 1;
let numerosPares = 0;
while(j <= 50)
{
    if(j % 2 ==0)
    {
        numerosPares++;
    }
    j++;
}
console.log("\nNumeros pares de 1 a 50: " + numerosPares);

//4
let n = readline.questionInt("\nEscolha um número para eu multiplicar por 2 até o resultado ser maior que 1000: ");
if(n <= 1000){
    while(n < 1000)
    {
        n*=2;
    }
}else{
    console.log("Numero digitado é superior a 1000");
    console.log("Numero: " + n);
}
console.log("Numero: " + n);

//5 
let n1 = readline.questionInt("\nDigite um número para eu verificar se ele é primo: ");
let contador = 2;
let divisiveis = 2;
while(contador < n1){
    if(n1 % contador == 0){
       divisiveis++;
    }
    contador++;
}
if(divisiveis > 2)
{
    console.log(n1 + " não é primo!");
}
else
{
    console.log(n1 + " é primo!");
}

//6
let senha = readline.question("\nDigite sua senha: ");
let confirmarSenha = "";

while(senha !== confirmarSenha){
    confirmarSenha = readline.question("Confirme sua senha: ");
    if(senha !== confirmarSenha)
    {
        console.log("As duas senhas não são iguais, tente novamente...\n");
    }
}

//7
let contador1 = 1;

console.log("\nMultiplos de 3 de 1 a 30: ");
while (contador1 <= 30){
    if(contador1 % 3 == 0)
    {
        console.log(contador1);
    }
    contador1++;
}


//8
const numeros = [32,54,12,7,9,54,2,9,54,1,89];
let somaNumeros = 0;
let contador2 = 0;
while(contador2 < numeros.length){
    somaNumeros += numeros[contador2];
    contador2++;
}
console.log("\n" + numeros);
let media = somaNumeros/numeros.length;
console.log("Média: " + media);

//9
let numeroFatorial = readline.questionInt("\nDigite um número para eu calcular o fatorial: ");
let contador3 = numeroFatorial;
let fatorial = numeroFatorial;

while(contador3 > 1){
    fatorial *=  (contador3-1);
    contador3--;
}
console.log("Fatorial de " + numeroFatorial + " = " + fatorial);