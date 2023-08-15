const rl = require("readline-sync")


// // Funções sem retorno
// function saudacao(){
//     console.log("Olá, Mundo!");
// }

// saudacao();

// //

// function dobro(num){
//     console.log(2*num);
// }

// dobro(2);

// //

// function mostrarNumeros(inicio, fim){
//     for(let i = inicio; i <= fim; i++){
//         console.log(i);
//     }
// }

// mostrarNumeros(1,12);

// //

// function verificarPar(numero){
//     if(numero % 2 == 0){
//         console.log(`O número ${numero} é PAR`);
//     }
//     else
//     {
//         console.log(`O número ${numero} é IMPAR`);
//     }
// }

// verificarPar(10);
// verificarPar(99);

// //


// function imprimirLista(lista){
//     for(let i = 0; i < lista.length; i++)
//     {
//         console.log(lista[i]);
//     }
// }

// array = [1, 2, false, 4, true, 'teste', 'lala', 'blabla', 'bleble', 'cof'];

// imprimirLista(array);


// // Funções com retorno

// function saudacaoRetorno(){
//     return "Olá, mundo!";
// }

// let msg_saudacao = saudacaoRetorno();
// console.log(msg_saudacao);

// // Funções com valores padrão

// function saudar(nome, saudacao="Hello"){
//     console.log(`${saudacao}, ${nome}`);
// }

// saudar("Matheus");
// saudar("Matheus", "Olá");

// function calcular(num1, num2, operador="+"){
//     if (operador === "+")
//         console.log(num1+num2);
//     else if(operador === "-"){
//         console.log(num1-num2);
//     }else if(operador === "*"){
//         console.log(num1*num2);
//     }else if(operador === "/"){
//         console.log(num1/num2);
//     }else{
//         console.log("Operador informado não reconhecido!");
//     }
// }

// let numero1 = rl.questionInt("Digite um número: ");
// let numero2 = rl.questionInt("Digte outro número: ");
// let operacaoMatematica = rl.question("Agora escolha a operação que deseja realizar: (+, -, *, /)");

// calcular(numero1,numero2);

// calcular(numero1,numero2,operacaoMatematica);

// function contagemRegressiva(contagem=10){
//     for(let i = contagem; i >= 1; i--)
//     {
//         console.log(i);
//     }
//     console.log("BOOOOOOM!");
// }

// // contagemRegressiva();
// // contagemRegressiva(30);


// function apresentacao(nome="Furisbeco", idade=18, profissao="Estudante"){
//     console.log(`Olá, eu sou o ${nome}, tenho ${idade} anos e sou ${profissao}`)
// }

// apresentacao("Matheus",99);

// function mensagemPersonalizada(texto, estilo="normal"){
//     if(estilo === "normal") 
//         console.log(texto);
//     else if(estilo === "negrito") 
//         console.log(texto.bold());
//     else if(estilo === "itálico") 
//         console.log(texto.italics());
//     else 
//         console.log("Estilo de texto não reconhecido.")
// }

// let texto = rl.question("Digite uma mensagem: ");
// let style = rl.question("Escolha o estilo do texto ('normal', 'negrito', 'itálico'): ");

// mensagemPersonalizada(texto,style);

// function criarMensagemDeSaudacao(nome){
//     return `Olá, ${nome}`;
// }

// console.log(criarMensagemDeSaudacao("Matheus"));

// function somaDois(n1, n2){
//     return n1+n2;
// }

// resultado = somaDois(4,9);

// console.log(resultado);

// function ehPar(numero){
//     return numero%2===0;
// }

// console.log(ehPar(20));
// console.log(ehPar(9));

// function maiorNumero(n1,n2,n3){
//     let maior = 0;

//     if (n1 > maior) 
//         maior = n1;
//     if (n2 > maior) 
//         maior = n2;
//     if (n3 > maior) 
//         maior = n3;

//     return maior;
// }

// console.log(maiorNumero(10,20,30));
// console.log(maiorNumero(100,20,50));
// console.log(maiorNumero(2,200,30));
// console.log(maiorNumero(100,50,900));

function calcularImc(peso, altura){
    return (peso/(altura*altura)).toFixed(2);
}

console.log(calcularImc(77.8, 1.71));