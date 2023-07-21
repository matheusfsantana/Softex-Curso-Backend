## Desafio

Elabore um algoritmo que representa um cadastro. Ele deve ler os seguintes dados fornecidos pelo usuário:


- Nome
- Endereço
- Cidade
- CPF
- RG
- Idade
- Nome do pai
- Nome da mãe
- Peso
- Renda bruta


Apresente as informações solicitadas no final do cadastro.

## Resolução
```portugol
algoritmo Cadastro
var
    nome, endereco, cidade, nomeDoPai, nomeDaMae : caractere;
    cpf, rg, idade : inteiro;
    peso, rendaBruta: real;

inicio
    escreva(“Digite seu nome”);
    leia(nome);
    
    escreva("Digite o seu endereço: ");
    leia(endereco);
    
    escreva("Digite a sua cidade: ");
    leia(cidade);
    
    escreva("Digite o seu CPF: ");
    leia(cpf);
    
    escreva("Digite o seu RG: ");
    leia(rg);
    
    escreva("Digite a sua idade: ");
    leia(idade);
    
    escreva("Digite o nome do seu pai: ");
    leia(nomeDoPai);
    
    escreva("Digite o nome da sua mãe: ");
    leia(nomeDaMae);
    
    escreva("Digite o seu peso: ");
    leia(peso);
    
    escreva("Digite a sua renda bruta: ");
    leia(rendaBruta);
    
    escreva(“Dados cadastrados:”);
    escreva("Nome: ", nome);
    escreva("Endereço: ", endereco);
    escreva("Cidade: ", cidade);
    escreva("CPF: ", cpf);
    escreva("RG: ", rg);
    escreva("Idade: ", idade);
    escreva("Nome do pai: ", nomeDoPai);
    escreva("Nome da mãe: ", nomeDaMae);
    escreva("Peso: ", peso);
    escreva("Renda bruta: ", rendaBruta);
fimAlgoritmo
```