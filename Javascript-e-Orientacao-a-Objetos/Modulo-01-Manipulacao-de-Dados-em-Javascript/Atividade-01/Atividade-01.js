// Estamos rodeados por dados no nosso cotidiano e, nas aulas, aprendemos sobre os seus diversos tipos. 
// Agora, vamos criar variáveis do tipo boolean, BigInt, string  e symbol
// No primeiro momento, após declará-las, precisamos exibir seus conteúdos, que devem ser <b>UNDEFINED</b>. 
// Em seguida, vamos deixar essas variáveis com valores nulos e imprimir. 
// Por fim, cada uma deve receber um dos tipos como atribuição e os seus respectivos valores devem ser impressos na tela.

let variavelBoolean;
let variavelBigInt;
let variavelString;
let variavelSymbol;

//Como nenhum valor foi declarado, elas terão o valor de "Undefined"
console.log(variavelBoolean);
console.log(variavelBigInt);
console.log(variavelString);
console.log(variavelSymbol);

//Valores nulos

variavelBoolean = null;
variavelBigInt = null;
variavelString = null;
variavelSymbol = null;


console.log(variavelBoolean);
console.log(variavelBigInt);
console.log(variavelString);
console.log(variavelSymbol);

variavelBoolean = true;
variavelBigInt = 12345678910121323n;
variavelString = "String qualquer";
variavelSymbol = Symbol();

//Verificando os tipos
console.log(typeof(variavelBoolean));
console.log(typeof(variavelBigInt));
console.log(typeof(variavelString));
console.log(typeof(variavelSymbol));

// Imprimindo os valores
console.log(variavelBoolean);
console.log(variavelBigInt);
console.log(variavelString);
console.log(variavelSymbol);

