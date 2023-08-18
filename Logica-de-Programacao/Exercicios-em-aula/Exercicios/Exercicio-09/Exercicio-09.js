function fatorial(n)
{
    if(n === 1 || n === 0)
    {
        return 1;
    }
    else
    {
        return n * fatorial(n-1);
    }
}

// fatorial(5)
// return 5 * fatorial(5-1)
//        return 4 * fatorial(4-1)
//               return 3 * fatorial (3-1)
//                      return 2 * fatorial (2-1)
//                             return 1

// console.log(fatorial(5));


function somaRecursiva(n)
{
    if (n === 1){
        return 1;
    }
    else if ( n === 0){
        return 0;
    }
    else{
        return n + somaRecursiva(n-1);
    }
}


function fibonacci(n){
    if(n < 2)
    {
        return n;
    }
    else
    {
        return fibonacci(n-1) + fibonacci(n-2);       
    }
}
console.log(fibonacci(7));

// console.log(somaRecursiva(0));
// console.log(somaRecursiva(10));
// console.log(somaRecursiva(-10));

// function progressaoAritmetica(termos, razao){
//     if(termos === 1){
//         return razao;
//     }
//     else
//     {
//         return razao + progressaoAritmetica(termos-1, razao);
//     }
// }

// console.log(progressaoAritmetica(10,2));