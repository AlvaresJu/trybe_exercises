/* Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers = [];

for (let i = 0; i < numbers.length - 1; i += 1) {
    multipliedNumbers.push(numbers[i] * numbers[i + 1]);
}

multipliedNumbers.push(numbers[numbers.length - 1] * 2);

console.log (multipliedNumbers);
