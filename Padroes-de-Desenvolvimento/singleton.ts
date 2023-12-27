class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senha_muito_secreta_kk";
  
    private constructor() {}
  
    static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta.");
      } else {
        console.log("Acesso negado. Intruso detectado!");
      }
    }
  }
  

  const sistema = SistemaSeguranca.getInstance();
  
  const senhaInserida = "senha_correta";
  sistema.acessarBaseSecreta(senhaInserida); 
  