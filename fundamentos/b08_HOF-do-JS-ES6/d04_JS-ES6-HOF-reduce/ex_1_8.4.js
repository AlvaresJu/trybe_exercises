// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(matrix) {
  return matrix.reduce((acc, interArr) => acc.concat(interArr), []);
}

console.log(flatten(arrays));
