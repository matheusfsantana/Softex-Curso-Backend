class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
  }

  clone() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
  }
}


class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
  }

  represent() {
      return super.represent() + `, Número de Portas: ${this.numeroPortas}`;
  }
}


class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, tipo) {
      super(modelo, marca, cor, numeroRodas);
      this.tipo = tipo;
  }

  represent() {
      return super.represent() + `, Tipo: ${this.tipo}`;
  }
}


class Aplicacao {
  constructor() {
      this.veiculos = [
        new Carro('Civic', 'Honda', 'Branco', 4, 4),
        new Carro('Golf', 'Volkswagen', 'Azul', 4, 4),
        new Carro('Corolla', 'Toyota', 'Preto', 4, 4),
        new Moto('CBR 1000RR', 'Honda', 'Vermelho', 2, 'Esportiva'),
        new Moto('MT-07', 'Yamaha', 'Cinza', 2, 'Naked'),
        new Moto('Ninja ZX-6R', 'Kawasaki', 'Verde', 2, 'Esportiva')
      ];
  }

  cloneVeiculos() {
      return this.veiculos.map(veiculo => veiculo.clone());
  }

  representVeiculos() {
      let clones = this.cloneVeiculos();
      clones.forEach(clone => console.log(clone.represent()));
  }
}

let app = new Aplicacao();
app.representVeiculos();
