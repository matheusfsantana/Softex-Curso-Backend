// Crie um programa que contenha os seguintes tipos de funções:
// 1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
// 2. uma função tradicional com parâmetros e um retorno de valor;
// 3. uma arrow function com parâmetros e que retorne um valor.
// Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

const rl = require("readline-sync");

function receberNotasAluno() {
  console.log("------ Situação do Aluno ------");
  let nota_1 = rl.questionFloat("Nota 1: ");
  let nota_2 = rl.questionFloat("Nota 2: ");

  return [nota_1, nota_2];
}

function calcularMedia(nota_1, nota_2) {
  return (nota_1 + nota_2) / 2;
}

const resultado = (media) => {
  if (media >= 7) {
    return `Aprovado com média: ${media}!`;
  } else {
    return `Reprovado média: ${media} não suficiente!`;
  }
};

let notas = receberNotasAluno();
let media = calcularMedia(notas[0], notas[1]);
let situacao = resultado(media);
console.log(situacao);
