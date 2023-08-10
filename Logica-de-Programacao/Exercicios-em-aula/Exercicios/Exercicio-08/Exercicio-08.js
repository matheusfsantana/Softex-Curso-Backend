const rl = require("readline-sync")


// Funções sem retorno
function saudacao(){
    console.log("Olá, Mundo!");
}

saudacao();

//

function dobro(num){
    console.log(2*num);
}

dobro(2);

//

function mostrarNumeros(inicio, fim){
    for(let i = inicio; i <= fim; i++){
        console.log(i);
    }
}

mostrarNumeros(1,12);

//

function verificarPar(numero){
    if(numero % 2 == 0){
        console.log(`O número ${numero} é PAR`);
    }
    else
    {
        console.log(`O número ${numero} é IMPAR`);
    }
}

verificarPar(10);
verificarPar(99);

//


function imprimirLista(lista){
    for(let i = 0; i < lista.length; i++)
    {
        console.log(lista[i]);
    }
}

array = [1, 2, false, 4, true, 'teste', 'lala', 'blabla', 'bleble', 'cof'];

imprimirLista(array);


// Funções com retorno

function saudacaoRetorno(){
    return "Olá, mundo!";
}

let saudacao = saudacaoRetorno();
console.log(saudacao);

