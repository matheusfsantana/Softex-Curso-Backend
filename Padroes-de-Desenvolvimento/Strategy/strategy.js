const rl = require('readline-sync');

class Strategy {
  execute() {}
}

class Soma extends Strategy {
  execute(a, b) {
    return a + b;
  }
}

class Subtracao extends Strategy {
  execute(a, b) {
    return a - b;
  }
}

class Multiplicacao extends Strategy {
  execute(a, b) {
    return a * b;
  }
}

class Calculadora {
  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calcular(a, b) {
    return this.strategy.execute(a, b);
  }
}

const calculadora = new Calculadora();
const soma = new Soma();
const subtracao = new Subtracao();
const multiplicacao = new Multiplicacao();

let valor1 = rl.questionInt("Digite o primeiro valor: ");
let valor2 = rl.questionInt("Digite o segundo valor: ");
let operacao = rl.question("Digite a operação matemática (+,-,*): ");

switch (operacao) {
  case "+":
    calculadora.setStrategy(soma);
    break;
  case "-":
    calculadora.setStrategy(subtracao);
    break;
  case "*":
    calculadora.setStrategy(multiplicacao);
    break;
}

let resultado = calculadora.calcular(valor1, valor2);

console.log(`O resultado da operação é ${resultado}.`);
