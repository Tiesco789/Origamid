var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiGraduacao) {
    console.log('é verdadeiro');
} else if(possuiDoutorado) {
    console.log('Possui doutorado');
} else {
    console.log('Não possui nada');
}

var nome = 'Franccesco'

if (nome) {
    console.log(nome);
} else {
    console.log('nome não existe');
}

if (!possuiGraduacao) {
    console.log('Não possui graduação');
}

// Falsy
if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if (''); // ou "" ou ``

// Truthy
if(true);
if(1);
if(' ');
if('andre');
if(-5);
if({});

// Truthy
if(!true); // false
if(!1); // false
if(!''); // true
if(!undefined); // true
if(!!' ');// true
if(!!''); // false

var x = 11;

console.log(x !== 10);

if ((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

var condicional = (5 - 10) && (5 + 5)
if (condicional) {
    console.log('Verdadeiro', condicional);
} else {
    console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2);

// O JS sempre vai dar o ultimo verdadeiro

var corFavorita = 'Amarelo';
switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Vermelho':
        console.log('Olhe para o chão');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
    default:
        console.log('Feche os olhos');
        break;
}

/**
 * Exercicio
 */

 // Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 26;
var idadeParente = 26;
if (minhaIdade < idadeParente) {
    console.log('É maior');
} else if (minhaIdade === idadeParente) {
    console.log('É igual');
} else {
    console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var primeiroNome = 'Franccesco'; // truthy
var idade = 26; // truthy
var possuiEmprego = true; // truthy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
// Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
// 'Cão'
