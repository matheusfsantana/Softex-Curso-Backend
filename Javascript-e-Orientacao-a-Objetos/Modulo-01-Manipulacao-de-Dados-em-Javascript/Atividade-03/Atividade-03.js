// A atividade que faremos é a da “calculadora de média”. 
// Para isso, você deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário 
// e exiba o resultado no console.
// Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). 
// Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, 
// com o tipo de dado Number. Depois, some-as e divida por três. 
// O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. 
// Por fim, exiba esse valor no console usando a função console.log().



// # Para rodar em uma pagina html:
// let nota1 = parseFloat(prompt("Digite a nota 1:"));
// let nota2 = parseFloat(prompt("Digite a nota 2:"));
// let nota3 = parseFloat(prompt("Digite a nota 3:"));

// media = (nota1+nota2+nota3)/3;

// alert("Média: " + media);


// # Para rodar em um terminal:
const rl = require('readline-sync');

let nota_1 = rl.questionInt("Digite a nota 1: ");
let nota_2 = rl.questionInt("Digite a nota 2: ");
let nota_3 = rl.questionInt("Digite a nota 3: ");

mediaNota = (nota_1+nota_2+nota_3)/3;

console.log("Média: " + mediaNota);