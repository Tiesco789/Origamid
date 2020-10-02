const animais = document.getElementById('animais');
console.log(animais);

const gridSelection = document.getElementsByClassName('grid-section');
console.log(gridSelection[1]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach((item) => {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach((item) => {
  console.log(item);
});

/**
 * EXERCICIOS
 */

// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img');
console.log(allImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const allLinks = document.querySelectorAll('[href^="#"]');
console.log(allLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
const h2animais = animais.querySelector('h2');

console.log(h2);
console.log(h2animais);

// Selecione o último p do site
const lastParagraph = document.querySelector('p');
console.log(lastParagraph[lastParagraph.length - 1]);
