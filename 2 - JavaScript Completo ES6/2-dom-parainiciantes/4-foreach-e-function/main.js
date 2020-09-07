// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

// titulosArray.forEach((item, index, array) => {
//   // console.log(item, index, array);
// });

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//   console.log(item);
// });

/**
 * EXERCICIO
 */

// Mostre no console cada parágrado do site
const allParagraph = document.querySelectorAll('p');
console.log(allParagraph);

allParagraph.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
allParagraph.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
