/**
 * Tipos de dados
 * Todos são primitivos exceto os objetos
 * Primitivos são dados imutáveis
 */

var nome = 'Franccesco',
  sobrenome = 'Antonio'; // String
var idade = 26; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

var nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto);

// var gols = 1000;
// var frase = 'Romário fez ' + gols + ' gols';
// console.log(typeof frase);

var ano = 2020;
var mes = 8;
console.log(ano + mes);

var melhor = 'teste';
var frase1 = "esse é o \"melhor\" jogo";
console.log(frase1);

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`;

// Exercicio
// Declare uma variável contendo uma string
var string = 'qualquer coisa'

// Declare uma variável contendo um número dentro de uma string
var numString = '20'

// Declare uma variável com a sua idade
var idade = 26;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Franccesco';
var sobrenome = 'Antonio';
var nomeCompleto = `${nome} ${sobrenome}`;

// Coloque a seguinte frase em uma variável: It's time
var frase = `It's time`;

// Verifique o tipo da variável que contém o seu nome
console.log(typeof name);


