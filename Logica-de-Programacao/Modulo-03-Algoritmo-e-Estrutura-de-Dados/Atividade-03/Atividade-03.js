/*Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado? */

arrayFila = [3,7,9,1,0];
arrayLista = [3,7,9,1,0];
arrayPilha = [3,7,9,1,0];

console.log("Fila"); // Primeiro a entrar, primeiro a sair
console.log(arrayFila);
while(arrayFila.length != 0)
{
    //Ordem a ser removido: 3, 7, 9, 1, 0
    arrayFila.shift();
    console.log(arrayFila);
}

console.log("Lista"); // Não tem uma ordem a ser seguida, posso remover tudo de uma vez
console.log(arrayLista);
arrayLista.splice(0) //removendo da posição 0 até o fim
console.log(arrayLista);


console.log("Pilha"); // Primeira a entrar, ultimo a sair / Ultimo a entrar, primeiro a sair
console.log(arrayPilha);
while(arrayPilha.length != 0){
    arrayPilha.pop(); // Remove o ultimo elemento
    console.log(arrayPilha);
}
