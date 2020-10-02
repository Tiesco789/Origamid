// var nome = 'Franccesco';

// var nomeMinusculo = nome.toLowerCase();

// var btn = document.querySelector('.btn');


/**
 * Exercicio
 */

// nomeie 3 propriedades ou métodos de strings
var nome = 'Franccesco';
// nome.fixed;
// nome.length;
// nome.slice;

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
// btn.addEventListener
// btn.appendChild
// btn.id
// btn.innerHTML
// btn.outerHTML

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function myFunction() {
    // Pegar o texto no campo
    var copyText = document.getElementById('myInput');

    // Selecionar o texto no campo
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Mobile

    // Copiar o texto dentro do campo
    document.execCommand('copy');

    // Alerta
    alert(' Texto copiado ' + copyText.value);
}

