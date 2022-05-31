// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida = 'arroz', animal = 'gato', bebida = 'água'];

// Ou criando o array e o desestruturando:
// [comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida);
