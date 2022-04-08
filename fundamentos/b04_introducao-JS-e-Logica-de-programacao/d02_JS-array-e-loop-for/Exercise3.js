/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let average;
for (let i = 0; i < numbers.length; i += 1) {
    average = (sum += numbers[i]) / numbers.length;
}

console.log("The average of the values is = " + average);
