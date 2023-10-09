// Objeto material Carro
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
    this.velocidade = 0;
  }

  ligar() {
    this.ligado = true;
    console.log("O carro está ligado.");
  }

  desligar() {
    this.ligado = false;
    this.velocidade = 0;
    console.log("O carro está desligado.");
  }

  acelerar(velocidade) {
    if (this.ligado) {
      this.velocidade += velocidade;
      console.log(`Acelerando para ${this.velocidade} km/h.`);
    } else {
      console.log("O carro precisa estar ligado para acelerar.");
    }
  }
}

// Objeto material Livro
class Livro {
  constructor(titulo, autor, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
    this.aberto = false;
    this.paginaAtual = 0;
  }

  abrir() {
    this.aberto = true;
    console.log("Livro aberto.");
  }

  fechar() {
    this.aberto = false;
    console.log("Livro fechado.");
  }

  ler(pagina) {
    if (this.aberto && pagina >= 1 && pagina <= this.numPaginas) {
      this.paginaAtual = pagina;
      console.log(`Lendo página ${pagina}.`);
    } else {
      console.log("Não é possível ler a página especificada.");
    }
  }
}

// Objeto abstrato Conta Bancária
class ContaBancaria {
  constructor(nomeTitular, numeroConta) {
    this.nomeTitular = nomeTitular;
    this.numeroConta = numeroConta;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente para o saque.");
    }
  }

  verificarSaldo() {
    console.log(`Saldo atual: R$ ${this.saldo}`);
  }
}

// Objeto abstrato Calendário
class Calendario {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.eventosAgendados = [];
  }

  adicionarEvento(evento) {
    this.eventosAgendados.push(evento);
    console.log(`Evento "${evento}" adicionado ao calendário.`);
  }

  removerEvento(evento) {
    const index = this.eventosAgendados.indexOf(evento);
    if (index !== -1) {
      this.eventosAgendados.splice(index, 1);
      console.log(`Evento "${evento}" removido do calendário.`);
    } else {
      console.log(`Evento "${evento}" não encontrado no calendário.`);
    }
  }

  listarEventos() {
    console.log("Eventos agendados para este mês:");
    this.eventosAgendados.forEach(evento => {
      console.log(evento);
    });
  }
}

// Exemplo de uso das classes
const meuCarro = new Carro("Toyota", "Corolla", 2022);
meuCarro.ligar();
meuCarro.acelerar(60);

const meuLivro = new Livro("Dom Casmurro", "Machado de Assis", 256);
meuLivro.abrir();
meuLivro.ler(10);

const minhaConta = new ContaBancaria("João Silva", "12345");
minhaConta.depositar(500);
minhaConta.sacar(200);

const meuCalendario = new Calendario("Outubro", 2023);
meuCalendario.adicionarEvento("Reunião de trabalho");
meuCalendario.listarEventos();
