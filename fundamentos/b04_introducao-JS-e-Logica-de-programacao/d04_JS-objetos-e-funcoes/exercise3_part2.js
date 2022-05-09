/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor. */

function minValuePosition (array) {
    let position = 0;
    for (let index in array) {
        if (array[index] < array[position]) {
            position = index;
        }
    }
    return position;
}

console.log(minValuePosition([2, 4, 6, 7, 10, 0, -3]));
