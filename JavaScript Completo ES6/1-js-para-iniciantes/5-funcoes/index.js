// function areaQuadrado(lado) {
//     return lado * lado
// }
// console.log(areaQuadrado(10));

// function pi() {
//     return 3.14
// }

// var total = 5 * pi(); // 15.7
// console.log(total);

// function imc(peso, altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }

// console.log(imc(80, 1.8));

// function corFavorita(cor) {
//     if (cor === 'Azul') {
//         return 'Eu gosto do céu';
//     } else if (cor === 'Verde') {
//         return 'Eu gosto de mato';
//     } else {
//         return 'Eu não gosto de cores';
//     }
// }

// function mostraConsole() {
//     console.log('oi');
// }
// addEventListener('click', mostraConsole)


// function imc2(peso, altura) {
//     var imc = peso / (altura ** 2);
//     return imc;
// }

// imc2(80, 1.8);
// // console.log();

// function terceiraIdade(idade) {
//     if (typeof idade !== 'Number') {
//         return 'Por favor preecha um número';
//     } else if (idade >= 60) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(terceiraIdade('oi'));

// function faltaVisitar(paisesVisitados) {
//     var totalPaises = 193;
//     return `Faltam visitar ${totalPaises - paisesVisitados} países`
// }

// var profissao = 'Designer';

// function dados() {
//     var nome = 'André';
//     var idade = 28;
//     function outrosDados() {
//         var endereco = 'Rio de Janeiro';
//         var idade = 29;
//         return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//     }
//     return outrosDados();
// }

// console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// // outrosDados(); // retorna um erro

/**
 * Exercicios
 */
// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
    return !!dado
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    var perimetro = lado * 4;
    return perimetro;
}
console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName('Andre', 'Rafael'));

// Crie uma função que verifica se um número é par
function isEvan(par) {
    var modulo = par % 2
    if (modulo === 0) {
        return 'O numero é par'
    } else {
        return 'O numero é impar'
    }
}
console.log(isEvan());

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function returnTypeOf(dado) {
    return typeof dado;
}
console.log(returnTypeOf());

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("click", function () {
    console.log(
        'Franccesco Antonio'
    );
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    var totalPaises = 193;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

