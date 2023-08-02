/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, 
alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas. */

const nomes = ["adalberto","brenno","carlos","daniel","erick","felipe","gustavo","hugo","ian","joão"];
const idades = [16,17,18,19,20,21,22,23,24,25];
const coresFavoritas = ["azul","azul","preto","vermelho","amarelo","verde","azul","preto","branco","branco"];

console.log(nomes);
console.log(idades);
console.log(coresFavoritas);

idades[2] = 30;
coresFavoritas[8] = "preto";

console.log(nomes);
console.log(idades);
console.log(coresFavoritas);

