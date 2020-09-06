var pessoa = {
    nome: 'Franccesco',
    idade: 26,

}

console.log(pessoa.idade);

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado
    },
    perimetro(lado) {
        return this.lado * lado;
    },
    cinco() {
        return 5;
    },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random);

var menu = {
    width: 800,
    height: 600,
    background: '#FFF',
    metadeHeight() {
        return this.height / 2;
    }
}

menu.background = '#000';

menu.color = 'blue';
menu.esconder = function () {
    console.log('escondi');
}
var bg = menu.background;

/**
 * Exercicio
 */

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
    nome: 'Franccesco',
    sobrenome: 'Antonio',
    idade: 26,
    altura: 1.85
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
        if (pessoa === 'homem') {
            return 'latir'
        } else {
            return 'Nada'
        }
    }
}

