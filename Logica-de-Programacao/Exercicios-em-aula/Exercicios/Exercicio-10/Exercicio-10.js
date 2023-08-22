// //Lista de objeto usuarios

// const usuarios = [
//     {nome: "Matheus", idade: 23},
//     {nome: "Marina", idade: 24},
//     {nome: "Marcos", idade: 28},
//     {nome: "Lucas", idade: 30},
//     {nome: "Bárbara", idade: 18},
//     {nome: "Millena", idade: 21}
// ];


// for(let i = 0; i < usuarios.length; i++){
//     console.log(usuarios[i]);
// }

// for(let i = 0; i < usuarios.length; i++){
//     console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade} anos`);
// }

// for (let elemento in usuarios){
//     console.log(usuarios[elemento].nome);
// }

// for(let elemento of usuarios){
//     console.log(`Nome: ${elemento.nome}, Idade: ${elemento.idade}`);
// }

// const numeros = [150,100,200,250,50,50,20];
// const palavras = ["cadeira", "lapis", "caneta", "caderno", "mesa"];
// const logicos = [true,false,false,true,true];

// for(let i in numeros){
//     console.log(numeros[i]);
// }

// for(let i in palavras){
//     console.log(palavras[i]);
// }

// for(let i in logicos){
//     console.log(logicos[i]);
// }

// for(let e of numeros){
//     console.log(e);
// }

// for(let e of palavras){
//     console.log(e);
// }

// for(let e of logicos){
//     console.log(e);
// }


// const numeros = [3, 7, 2, 9, 5];

// for(let i in numeros){
//     console.log(numeros[i]);
// }

// const valores = {a: 10, b: 20, c: 30, d: 40};
// let soma = 0;

// for(let i in valores){
//     soma += valores[i];
// }

// console.log(soma);

// const numeros = [12, 5, 8, 21, 16, 7];
// const pares = [];

// for(e of numeros){
//     if(e % 2 == 0){
//         pares.push(e);
//     }
// }

// console.log(pares);

//  const estudantes = {alice: 18, bob: 20, carol: 19, david: 21};
//  const estudante = [
//     {àlice: 18},
//     {bob: 20}
//  ]

// for (let i in estudantes){
//     if(estudantes[i] === 19){
//         console.log(`Nome: ${i}, Idade: ${estudantes[i]}`);
//     }
// }

const matriz = [[2,5,8], [3,9,12], [4,6,10]];
let soma = 0;
for(let e of matriz){
    for(let j of e){
        soma += j;
    }
}

console.log(soma);

