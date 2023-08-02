/*1- Dado o array abaixo, acesse o segundo elemento e armazeneo em uma variavel chamada "segundoElemento". const meuArray = [10, 20, 30, 40, 50];
  2- Calcule e exiba o tamanho do seguinte array: const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
  3- Adicione o elemento "pera" ao final do array de frutas do exercicio anterior.
  4- Remova o primeiro elemento do arrat de frutas do exercicio anterior
  5- Dado o array abaixo, verifique se o numero 25 esta presente e exiba uma mensagem indicando se ele foi encontrado ou nao. const numeros = [10, 20, 30, 40, 50]; */


  const meuArray = [10,20,30,40,50];
  let segundoElemento = meuArray[1];
  console.log(meuArray);
  console.log(segundoElemento);

  const frutas = ["maça", "banana", "laranja", "uva", "manga"];

  console.log(frutas);
  console.log("tamanho array frutas " + frutas.length);
  frutas.push("pera");
  console.log(frutas);

  frutas.shift();
  console.log(frutas);

  if(meuArray.find(n => n == 25) != undefined){
    console.log("O elemento 25 existe no array , `meuArray`: ", meuArray);
  }else{
    console.log("O elemento 25 NÃO existe no array , `meuArray`: ", meuArray);
  }

