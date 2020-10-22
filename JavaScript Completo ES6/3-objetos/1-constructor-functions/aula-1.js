// const Dom = {
//   seletor: 'li',

//   element() {
//     return elementoSelecionado = document.querySelector(this.seletor);
//   },

//   ativar() {
//     this.element().classList.add('ativar');
//   }
// }

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }

  this.ativar = function() {
    this.element().classList.add('ativar');
  }
};

const ul = new Dom('ul');
const li = new Dom('li');

const lastLi = new Dom('li:last-child');
lastLi.ativar();
