// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;

//   this.abracar = function () {
//     return 'Abraçou'
//   }
//   this.andar = function () {
//     return 'Andou pelo objeto'
//   }
// }

// Pessoa.prototype.andar = function () {
//   return this.nome + ' Pessoa Andou';
// }

// Pessoa.prototype.nadar = function () {
//   return this.nome + ' Pessoa nadou';
// };

// const tiesco = new Pessoa('Tiesco', 28);

// console.log(Pessoa.prototype);
// console.log(tiesco.prototype);

// const pais = 'Brasil';
// const cidade = new String('Rio');

// const listaAnimais = ['Cachorro', 'Gato', 'Cavalos'];
// const lista = document.querySelectorAll('li');

// // Transforma em um Array
// const listaArray1 = Array.prototype.slice.call(lista);
// const listaArray2 = Array.from(lista);

// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   andar() {
//     return true;
//   }
// }

/**
 * EXERCICIOS
 */

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Franccesco', 'Antonio', 26)

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String

