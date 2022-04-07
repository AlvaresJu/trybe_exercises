/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false. */

const a = 69;
const b = 18;
const c = 55;

if (a % 2 === 0 ||
    b % 2 === 0 ||
    c % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}
