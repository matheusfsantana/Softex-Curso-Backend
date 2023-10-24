class Sanduiche {
  getDescricao() {}
  getPreco() {}
}

class FrangoAssado extends Sanduiche {
  constructor() {
      super();
      this.descricao = "Sanduíche de Frango Assado";
      this.preco = 4.50;
  }

  getDescricao() {
      return this.descricao;
  }

  getPreco() {
      return this.preco;
  }
}

class Adicional extends Sanduiche {
  constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
  }

  getDescricao() {}
}

class Pepperoni extends Adicional {
  constructor(sanduiche) {
      super(sanduiche);
      this.descricao = ", Pepperoni";
      this.preco = 0.99;
  }

  getDescricao() {
      return this.sanduiche.getDescricao() + this.descricao;
  }

  getPreco() {
      return this.sanduiche.getPreco() + this.preco;
  }
}

class QueijoMussarelaRalado extends Adicional {
  constructor(sanduiche) {
      super(sanduiche);
      this.descricao = ", Queijo Mussarela Ralado";
      this.preco = 2.00;
  }

  getDescricao() {
      return this.sanduiche.getDescricao() + this.descricao;
  }

  getPreco() {
      return this.sanduiche.getPreco() + this.preco;
  }
}

let frangoAssado = new FrangoAssado();
frangoAssado = new Pepperoni(frangoAssado);
frangoAssado = new QueijoMussarelaRalado(frangoAssado);

console.log(frangoAssado.getDescricao() + " custa $" + frangoAssado.getPreco().toFixed(2) + ".");
