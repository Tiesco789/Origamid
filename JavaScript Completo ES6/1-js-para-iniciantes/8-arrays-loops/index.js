// var ultimoItem = videoGames.pop();

// videoGames.push('3DS');

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// var videoGames = ['Switch', 'PS4', 'Xone', '3ds'];

// for (var item = 0; item < videoGames.length; item++) {
//     console.log(videoGames[item]);
//     if (videoGames[item] === 'PS4') {
//         break;
//     }
// }

// var frutas = ['Banana', 'Mamão', 'Maçã', 'Uva'];

// frutas.forEach(function (fruta, index) {
//     console.log(fruta, index, frutas);
// });

/**
 * Exercicios
 */

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < copasBrasil.length; i++) {
    console.log(`O Brasil ganhou a copa de ${copasBrasil[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (var fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if (frutas[fruta] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];



