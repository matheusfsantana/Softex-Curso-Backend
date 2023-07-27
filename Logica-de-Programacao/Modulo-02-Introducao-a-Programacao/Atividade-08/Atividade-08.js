const readline = require("readline-sync");

while(true){
    try
    {
        let nome = readline.question("Digite seu nome: ");
        let nascimento = readline.questionInt("Digite seu ano de nascimento: ");
        
        if(nascimento < 1922 || nascimento > 2021)
        {
            throw new Error("Valor inválido, digite um ano entre 1922 e 2021!");
        }

        console.log(`Olá, ${nome}! Você completou ${2022-nascimento} anos em 2022! `)
        break;
    }
    catch(error)
    {
        console.log("Erro: " + error.message)
    }
}

