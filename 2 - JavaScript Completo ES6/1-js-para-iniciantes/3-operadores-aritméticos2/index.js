/**
 * Operadores Aritméticos
 */

console.log(2e-1); //0.2
console.log(2e-2); // 0.02
console.log(2e-3); // 0.002
// Precisão para até 15 digitos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
// Lembrando que soma + em Strings serve para concatenar

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

var soma1 = (10 + 10) + 20 + 30 * 4 / (2 + 10);
console.log(soma1);

// Operadores Aritméticos Unários
var x = 5;
console.log(x--);
console.log(x);

var idade = '28';
var somaIdade = -5;
console.log(idade);

/**
 * Exercicios
 *
 */

 // Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35

// Crie duas expressões que retornem NaN
var nan1 = 'aa' / 3;
var nan2 = 'bb' / 3;
console.log(nan1, nan2);

// Somar a string '200' com o número 50 e retornar 250
var somarString = +'200' + 50;
console.log(somarString);

// Incremente o número 5 e retorne o seu valor incrementado
var num1 = 5;
console.log(++num1);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso);
