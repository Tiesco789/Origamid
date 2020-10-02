// window.alert('isso mesmo')

// const { href } = window.location;
// console.log(href);

// if (
//   href === 'http://127.0.0.1:5500/2-dom-parainiciantes/1-o-que-e-dom/index.html'
// ) {
//   console.log('é igual');
// }

const h1Selecionado = document.querySelector('h1');
// const h1Classes = h1Selecionado.classList;

function callBackh1() {
  console.log('clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callBackh1);

/**
 * EXERCICIOS
 */

// Retorne o url da página atual utilizando o objeto window
const urlPage = location.href;
console.log(urlPage);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela
const windowWidth = document.innerWidth;
console.log(windowWidth);
