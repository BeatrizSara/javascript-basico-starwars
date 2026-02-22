console.log("Hello, Star Wars!");

var userName = "Beatriz";

document.getElementById('user-name').innerHTML = userName;

// variáveis e tipos de dados

/*
var nome = "Mestre Yoda";
var idade = 100;
var jedi = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof jedi);
*/

// Operadores Matemáticos

/* 
var n1 = 10
var n2 = 5

var soma = n1 + n2
var subtracao = n1 - n2
var multiplicacao = n1 * n2
var divisao = n1 / n2

+ para somar
- para subtrair
* para multiplicar
/ para dividir

console.log( soma)
console.log(typeof subtracao)
console.log(typeof multiplicacao)
console.log(typeof divisao)
*/

// Operadores de comparação

/* 
var n1 = 5
var n2 = 5

var igual = n1 == n2
var diferente = n1 != n2
var maior = n1 > n2
var menor = n1 < n2
var maiorIgual = n1 >= n2
var menorIgual = n1 <= n2

console.log(igual)
console.log(diferente)
console.log(maior)
console.log(menor)
console.log(maiorIgual)
console.log(menorIgual)
*/

// Funções

/*
function saudacao() {
    console.log("Olá, seja bem-vindo ao curso de JavaScript para QAs!");
}

saudacao()

function soma(a, b) {
    console.log (a + b)
}
soma(5, 10)

function saudacao(nome) {
    console.log("Olá, " + nome + "! Seja bem-vindo ao curso de JavaScript para QAs!");
}

saudacao("Mestre Yoda")


function soma(a, b) {
    return a + b
}   

var resultado = soma(5, 10)
console.log(resultado)
*/

// Controle de fluxo

/* 

-> Escrevendo o comportamento antes do software pronto - BDD

Sendo um cliente corretista do banco
Posso sacar dinheiro do caixa eletrônico
Para poder comprar em lugares que não aceitam cartão de débido ou crédito
*/

/*
var saldo = 1000

function sacar(valor) {
    

    if (valor > saldo) {
        console.log("Valor do saque é maior do que o saldo disponível.")

    }else if (valor > 700) {
        console.log("Valor do saque é maior do que o valor máximo permitido por operação.")
    }else{
        saldo = saldo - valor
    }

}

sacar(701)
console.log(saldo)
*/

/*
Cenário 1: Saque com sucesso
-Dado que meu saldo é de R$ 1000,00
-Quando faço um saque de R$ 500,00
-Entao o valor do meu saque deve ser deduzido do meu saldo

*/

/*
Cenário 2: Saque com valor superior ao saldo
-Dado que meu saldo é de R$ 1000,00
-Quando faço um saque de R$ 1001,00
-Então não deve deduzir o valor do meu saldo
-E deve mostrar uma mensagem de alerta informando que o valor do saque é maior do que o saldo disponível
*/

/*
Cenário 3: Saque com valor máximo
-Dado que meu saldo é de R$ 1000,00
-E o valor maximo por por operacao é de R$ 700,00 (PO informou para o QA o valor maximo por operacao)
-Quando faço um saque de R$ 701,00
-Então não deve deduzir o valor do meu saldo
-E deve mostrar uma mensagem de alerta informando que o valor do saque é maior do que o valor máximo permitido por operação
*/


// Arrays // Estrutura de dados que armazena uma coleção de elementos

/*
var gaveteiro = ["meias", "gravatas", "documentos", "salgadinhos"]

console.log(gaveteiro[0]) // meias
console.log(gaveteiro[1]) // gravatas
console.log(gaveteiro[2]) // documentos
console.log(gaveteiro[3]) // salgadinhos
*/

/* 
var personagens = ["Mestre Yoda", "Luke Skywalker", "Princesa Leia", "Darth Vader"]

personagens.push("C3PO") // Adiciona um elemento no final do array
personagens.push("R2-D2") // Adiciona um elemento no final do array

// personagens.pop() // Remove o último elemento do array

personagens = personagens.filter(function(p) {
    return p !== "Darth Vader"
}) // Remove o elemento "Darth Vader" do array

personagens = personagens.filter(function(p) {
    return p === "Mestre Yoda"
}) // Remove o elemento "Darth Vader" do array

console.log(personagens)
*/

// Controles de Repetição (Loops)


var personagens = ["Mestre Yoda", "Luke Skywalker", "Princesa Leia", "Darth Vader", "C3PO", "R2-D2"]

/*
personagens.forEach(function(p) {
    console.log(p)
} ) // vai percorrer cada elemento do array e executar a função para cada um deles


for (var i in personagens) {
    console.log(personagens[i])
} // vai percorrer cada índice do array e executar o código para cada um deles



for (var i = 0; i <= 10; i++) {
    console.log(i)
} // código vai ser executado até a condição retornar false, ou seja, até o valor de i ser maior do que 10

*/