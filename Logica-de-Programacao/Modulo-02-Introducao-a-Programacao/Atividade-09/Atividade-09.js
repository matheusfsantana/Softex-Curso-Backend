const readline = require("readline-sync");

let x = 0;
let y = 0;
let z = 0;
let branco = 0;
let nulo = 0;

const candidatos = {
    candidato_X: 889,
    candidato_Y: 847,
    candidato_Z: 515,
    branco: 0
}

console.log(candidatos);

fimVotacao = false;

while (!fimVotacao) {

    try {

        let voto = readline.question("Seu voto: ");

        voto = parseInt(voto);
        if(isNaN(voto))
        {
            throw new Error("Não é permitido textos, digite um número válido!");
        }

        switch (voto) {

            case candidatos.candidato_X:
                x += 1;
                break;

            case candidatos.candidato_Y:
                y += 1;
                break;

            case candidatos.candidato_Z:
                z += 1;
                break;

            case candidatos.branco:
                branco += 1;
                break;

            default:
                nulo += 1;
                break;
        }

        let continuar = readline.question("Deseja continuar a votação? (sim/não): ").toLowerCase();

        if(continuar != "sim")
        {
            fimVotacao = true;
        }
    } catch (erro) {
        console.log("Erro: " + erro.message);
    }
   
}

 console.log("Resultado votação: \n");

    if(x>y && x>z)
    {
        console.log("Vencedor: Candidato X");
    }else if(y > x && y>z){
        console.log("Vencedor: Candidato Y");
    }else{
        console.log("Vencedor: Candidato Z");
    }

    console.log("Candidato X: ", x);
    console.log("Candidato Y: ",y);
    console.log("Candidato Z: ",z);
    console.log("Branco: ",branco);
    console.log("Nulo: ",nulo);