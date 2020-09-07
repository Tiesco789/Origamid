// const menu = document.querySelector('.menu');
// menu.classList.add('ativo', 'teste');
// menu.classList.remove('azul');
// menu.classList.toggle('azul');

// if (menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul');
// } else {
//   menu.lassList.add('nao-possui-azul');
// }

// menu.className += ' vermelho';

// const animais = document.querySelector('.animais');
// console.log(animais.attributes['data-texto']);

// const img = document.querySelector('img');

// const srcImg = document.querySelector('img');

// console.log(img.getAttribute('alt'));

// img.setAttribute('alt', 'É uma raposa');
// const possuiAlt = img.hasAttribute('alt');
// console.log(possuiAlt);

// console.log(srcImg);

// // eslint-disable-next-line no-unused-vars
// const carro = {
//   portas: 4,
//   andar: (km) => {
//     console.log(`andou ${km}`);
//   },
// };

/**
 * EXERCICIOS
 */

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');
console.log(link);
