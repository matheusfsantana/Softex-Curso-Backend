// Crie dois códigos de sistema de notas para uma escola. 
// O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. 
// Utilize, no mínimo, um operador de atribuição e um operador ternário. 

// O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar 
// com nota sete

const rl = require('readline-sync');

//Primeiro código:
function retornaAprovacao(media){
    return media >= 7 ? "Aprovado" : "Reprovado";
}

console.log("Digite suas 3 notas: ");
let nota1 = rl.questionFloat("Nota 1: ")
let nota2 = rl.questionFloat("Nota 2: ")
let nota3 = rl.questionFloat("Nota 3: ")
let media = (nota1+nota2+nota3)/3;


console.log(retornaAprovacao(media));

//Codigo 2:
console.log("\nQuanto você precisa tirar para passar: ");
let n1 = rl.questionFloat("Digite sua primeira nota: ");
let n2 = rl.questionFloat("Digite sua segunda nota: ");
let n3 = 21 - (n1+n2); // 21/3 = 7, minha lógica foi descobrir somando as duas primeiras notas, quanto faltava para chegar a 21

console.log("Você precisa tirar: ", n3);