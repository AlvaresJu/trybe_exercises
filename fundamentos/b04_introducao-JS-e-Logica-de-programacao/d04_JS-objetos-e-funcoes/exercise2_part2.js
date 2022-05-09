/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */

function maxValuePosition (array) {
    let position = 0;
    for (let index in array) {
        if (array[index] > array[position]) {
            position = index;
        }
    }
    return position;
}

console.log(maxValuePosition([2, 3, 6, 7, 10, 1]));
