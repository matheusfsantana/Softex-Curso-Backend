const rl = require("readline-sync");

function calcularRaizQuadrada(numero) {
  if (numero < 0) {
      throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
  }
  return Math.sqrt(numero);
}

try {

  let numero = rl.questionFloat("Digite um número maior que zero: ");
  let resultado = calcularRaizQuadrada(numero);

  console.log(`A raiz quadrada de ${numero} é ${resultado}`);
} catch (excecao) {
  console.error(`Ocorreu uma exceção: ${excecao.message}`);
} finally {
  console.log("Fim!");
}
