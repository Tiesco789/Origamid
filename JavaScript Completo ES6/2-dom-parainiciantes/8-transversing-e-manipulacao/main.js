// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-lista');
// console.log(h1.innerHTML);
// console.log(animaisLista.innerHTML);

// h1.innerHTML = '<p>Novo Titulo</p>';
// console.log(animaisLista.innerHTML);

// const lista = document.querySelector('.animais-lista');
// console.log(lista.children[lista.children.length - 1]);
// console.log(lista.children('li:last-child'));

// console.log(lista.previousSibling);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.queryselect('.mapa');

// contato.replaceChild(mapa, titulo);

// contato.insertBefore(animais, mapa);

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// const h1 = document.querySelector('h1');
// const faq = document.querySelector('.faq');

// const cloneh1 = h1.cloneNode(true);

// cloneh1.classList.add('azul');

// faq.appendChild(h1);

/**
 * EXERCICIOS
 */

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('animais');
faq.innerHTML = animais.innerHTML;
