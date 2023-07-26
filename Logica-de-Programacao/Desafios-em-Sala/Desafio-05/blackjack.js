function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
let jogador = 0;
let banco = 0;
let fimJogo = false;

console.log("Inicio do jogo: ");
while(fimJogo == false)
{
    
    if(jogador < 17)
    {
        
        jogador += cartas[getRandomInt(0,12)]

    }
    if(banco < 17)
    {
        banco += cartas[getRandomInt(0,12)]
    }

    console.log("Jogador: ", jogador, "\nBanco: ", banco);

    if(jogador >= 17 && banco >= 17)
    {
        if(jogador > banco && jogador <= 21)
        {
            console.log("Jogador ganhou!");
            fimJogo = true;
        }
        else
        {
            console.log("Banco ganhou!");
            fimJogo = true;
        }
    }
}

console.log("Pontuação da partida:\nJogador: ", jogador, "\nBanco: ", banco);