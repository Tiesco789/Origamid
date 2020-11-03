// const comida = 'pizza';

// const agua = new String('Água')
// console.log(agua.length);

// const frase = 'A melhor comida';
// console.log(frase[frase.length - 1]);

// const linguagem = 'Javascript';
// console.log(linguagem[linguagem.length - 1]);
// console.log(linguagem.charAt(linguagem.length));

// const frase = 'A melhor liguagem é ';
// const linguagem = 'Javascript';

// const fraseFinal = frase.concat(linguagem, '!!');
// console.log(fraseFinal);

// const fruta = 'Banana';
// const listaFruta = 'Melancia, Bananas, Laranja';
// console.log(listaFruta.includes(fruta, 14));
// console.log(fruta.startsWith('Ba'));
// console.log(fruta.endsWith('nas'));
// console.log(fruta.indexOf('na'));

// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';
// console.log(transacao1.slice(-5));

const preco = 'R$99,00';
const listaPreco = ['R$99', 'R$199', 'R$12000'];

listaPreco.forEach((item) => {
  console.log(item.padStart(10, '-'));
});

frase = 'Ta';
console.log(frase.repeat(5));

