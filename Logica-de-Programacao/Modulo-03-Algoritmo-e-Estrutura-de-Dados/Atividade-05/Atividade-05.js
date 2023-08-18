// Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

// Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

// Codifique a solução mais eficiente para buscar o número 20 no array.


//Busca linear pois os valores do array não estão ordenados.
function buscaLinear(array, busca){

    for(let i = 0; i < array.length; i++){
        if(array[i] === valor){
            return true;
        }
    }

    return false;
}

array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
valor = 20;

console.log(buscaLinear(array, valor));


