// const img = document.querySelector('img');

// function callback(event) {
//   console.log(event);
// }

// img.addEventListener('click', callback);

// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event) {
//   console.log(event.currentTarget);
//   console.log(event.target);
//   console.log(event.type);
//   console.log(event.path);
// }

// animaisLista.addEventListener('click', callbackLista);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//   event.preventDefault();
//   // console.log(event);
//   console.log(this.getAttribute('src'));
//   console.log(event.currentTarget);
// }

// linkExterno.addEventListener('click', handleLinkExterno);

// function handleEvent(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

// function handleKeyboard(event) {
//   if(event.key === 'f') {
//     document.body.classList.add('fullscreen');
//   }
// }

// window.addEventListener('keydown', handleKeyboard);

// const imgs = document.querySelectorAll('img');

// function handleImg(event) {
//   console.log(event.currentTarget.getAttribute('src'));
// }

// imgs.forEach(img => {
//   img.addEventListener('click', handleImg)
// })

/**
 * EXERCICIOS
 */

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInterno = document.querySelectorAll('a[href^="a"');

function handleLink(event) {
  event.preventDefault();
  linksInterno.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInterno.forEach((link) => {
  link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

function handleElement(event) {
  event.currentTarget.remove();
}

allElements.forEach((element) => {
  element.addEventListener('click', handleElement);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyboard(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleKeyboard);
