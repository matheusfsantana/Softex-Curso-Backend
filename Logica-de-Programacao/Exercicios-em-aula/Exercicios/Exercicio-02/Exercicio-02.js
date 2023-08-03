let numero = 325;
let string = "Softex"
let bool = "Valor booleano"

if(numero > 0)
{
    console.log(numero, " é positivo");
}
else
{
    console.log(numero, " é negativo ou 0");
}

if(numero % 2 == 0)
{
    console.log(numero, " é par");
}
else
{
    console.log(numero, "é impar");
}

if(string == "")
{
    console.log("A string é vazia");
}
else
{
    console.log(string);
}

if(numero > 10)
{
    console.log(numero, "é maior que 10");
}
else
{
    numero*=2;
    console.log(numero, "multiplicado por 2");
}

if(string === true || string === false)
{
    console.log("A variavel é do tipo booleano");
}
else
{
    bool = true;
    console.log("Variavel bool: ", bool);
}