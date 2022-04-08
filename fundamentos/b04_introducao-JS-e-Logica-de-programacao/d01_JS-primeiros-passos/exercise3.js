/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const a = 45;
const b = 83;
const c = 5;

if (a >= b &&
    a >= c) {
    console.log("The gratest number is =", a);
} else if (b >= a &&
    b >= c) {
    console.log("The gratest number is =", b);
} else {
    console.log("The gratest number is =", c);   
}
