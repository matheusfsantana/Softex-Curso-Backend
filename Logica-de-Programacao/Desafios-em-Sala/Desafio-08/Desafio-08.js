/*1 - Crie dois arrays com numeros de 1 a 5 cada e em seguida concateneo-os em um novo array
  2 - Dado o array de numeros abaixo, crie um novo array contendo apenas o numeros pares (1 a 10)
  3 - Ordene o seguinte array de numeros em ordem crescente. const array = [3 , 1, 4 ,1 ,5 , 9,2 ,6 ,5 ,3 ,5)
  4 - Ddado o array de frutas abaixo, encontre o indice em que a laranja esta localizada. const frutas = ["maça", "banana", "laranja", "uva", "manga"]
  5 - Crie uma função que receba um parametro e verifique se e um array ou nao. a funcao deve retornar true se for um array e false caso contrario
  */

  const array1 = [1,2,3,4,5];
  const array2 = [1,2,3,4,5];
  const array3 = array1.concat(array2);
  console.log(array3);


  arrayNumeros = [ 1,2,3,4,5,6,7,8,9,10];
  arrayPares = arrayNumeros.filter(p => p % 2 == 0);
  console.log(arrayPares);

  const array = [3 , 1, 4 ,1 ,5 , 9,2 ,6 ,5 ,3 ,5]
  array.sort();
  console.log(array);

  const frutas = ["maça", "banana", "laranja", "uva", "manga"]
  console.log("Index da laranja: " + frutas.indexOf("laranja"));

  function verificarArray(variavel){
    if(Array.isArray(variavel)){
        return true;
    }else{
        return false;
    }
  }

  let variavel = 10;
  let variavel2 = [];

  console.log(verificarArray(variavel));
  console.log(verificarArray(variavel2));
