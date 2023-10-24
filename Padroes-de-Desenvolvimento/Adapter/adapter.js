class Pato {
  grasna() {
      return "Quack!";
  }
}

class Galinha {
  cacareja() {
      return "Cócóricó!";
  }
}

class AdaptadorPato {
  constructor(pato) {
      this.pato = pato;
  }

  cacareja() {
      return "Cócóricó!";
  }
}

class AdaptadorPatoDemo {
  static main() {
      const pato = new Pato();
      const galinha = new Galinha();
      const adaptadorPato = new AdaptadorPato(pato);

      console.log("Galinha diz: " + galinha.cacareja());
      console.log("Pato diz: " + pato.grasna());
      console.log("AdaptadorPato diz: " + adaptadorPato.cacareja());
  }
}

AdaptadorPatoDemo.main();
