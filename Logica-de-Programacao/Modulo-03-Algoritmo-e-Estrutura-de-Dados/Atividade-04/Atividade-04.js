class No{
    constructor(Nome,Idade){
        this.Nome = Nome;
        this.Idade = Idade;
        this.proximo = null;
    }
}

class ListaLigada{
    constructor(){
        this.cabeca = null;
    }

    adicionarNo(Nome,Idade){
        const novoNo = new No(Nome,Idade);

        if(this.cabeca == null){
            this.cabeca = novoNo;
        }else
        {
            let noAtual = this.cabeca
            while(noAtual.proximo !== null)
            {
               noAtual = noAtual.proximo;
            }
            noAtual.proximo = novoNo;
        }
        
    }

}


const listaLigada = new ListaLigada();

listaLigada.adicionarNo("Matheus", 23);
listaLigada.adicionarNo("Humberto", 18);
listaLigada.adicionarNo("Deborah", 28);
listaLigada.adicionarNo("Juliane", 26);

console.log(listaLigada);