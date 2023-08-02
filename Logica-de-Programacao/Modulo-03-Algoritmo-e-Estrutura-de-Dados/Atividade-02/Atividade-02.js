/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional 
para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.*/

const animais = [
    ["cachorro", "mamifero", 10],
    ["gato", "felino", 7],
    ["passáro", "ave", 2]
]

console.log(animais[0][0], animais[0][1], animais[0][2]);
console.log(animais[1][0]);


for (let i = 0; i < animais.length; i++) {
    for (let j = 0; j < animais[i].length; j++) {
      console.log(`Linha [${i}], Coluna [${j}]: ${animais[i][j]}`);
    }
}
