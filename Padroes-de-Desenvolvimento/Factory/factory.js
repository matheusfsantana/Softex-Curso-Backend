// Interface dos computadores
class FactoryComputer {
  constructor(ram, hdd, cpu, type) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

  toString() {
    return `Tipo: ${this.type}, RAM: ${this.ram} GB, HDD: ${this.hdd} GB, CPU: ${this.cpu} GHz`;
  }
}

// "Produto" PC
class FactoryPC extends FactoryComputer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, "PC");
  }
}

// "Produto" Server
class FactoryServer extends FactoryComputer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, "Server");
  }
}

// Classe Factory para criar os produtos
class Factory {
  static criarComputador(type, ram, hdd, cpu) {
    if (type.toLowerCase() === "pc") {
      return new FactoryPC(ram, hdd, cpu);
    } else if (type.toLowerCase() === "server") {
      return new FactoryServer(ram, hdd, cpu);
    } else {
      throw new Error(`Tipo de computador desconhecido: ${type}`);
    }
  }
}

// Exemplo de uso
const meuPC = Factory.criarComputador("PC", 8, 500, 2.8);
console.log(meuPC.toString());

const meuServer = Factory.criarComputador("Server", 16, 1000, 3.6);
console.log(meuServer.toString());
