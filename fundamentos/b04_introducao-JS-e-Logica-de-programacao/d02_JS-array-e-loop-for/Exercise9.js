/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */

let array = [];
for (let number = 1; number <= 25; number += 1) {
    array.push(number);
}

let arrayBy2 = [];
for (let i = 0; i < array.length; i += 1) {
    arrayBy2.push(array[i] / 2);
}

console.log(arrayBy2);
