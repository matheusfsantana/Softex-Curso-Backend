// Crie um código com um objeto chamado “Banco”.
// Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e
// os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

// Obs:
// buscar saldo - deve retornar o valor atual do saldo;
// - para o depósito  você deverá passar um valor como parâmetro e adicioná-lo no saldo final
// do objeto;
// - para o saque -  você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
// número da conta -  deve retornar o número da conta.

function Banco(conta, saldo, tipo, agencia) {
  this.conta = conta;
  this.saldo = saldo;
  this.tipo = tipo;
  this.agencia = agencia;
  this.buscarSaldo = function (){
    console.log(`Seu saldo é de: ${this.saldo}`);
  }
  this.deposito = (valor) => {
    this.saldo += valor;
    console.log(`Deposito realizado no valor de ${valor}`);
  }
  this.saque = (valor) =>{
    this.saldo -= valor;
    (`Saque realizado no valor de: ${valor}`);
  }
  this.numeroConta = () => console.log(`Numero da conta: ${this.conta}`);
}

const teste = new Banco(1, 100, "A", 22);

console.log(teste);

teste.buscarSaldo();
teste.deposito(100);
teste.buscarSaldo();
teste.numeroConta();
teste.saque(50);
teste.buscarSaldo();
