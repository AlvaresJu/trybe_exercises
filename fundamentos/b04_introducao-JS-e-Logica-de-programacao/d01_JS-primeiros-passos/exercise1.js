/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

function sum (a, b) {
    resultSum = a + b;
    return "The sum is = " + resultSum;
}

function sub (a, b) {
    resultSub = a - b;
    return "The subtraction is = " + resultSub;
}

function mult (a, b) {
    resultMult = a * b;
    return "The multiplication is = " + resultMult;
}

function div (a, b) {
    resultDiv = a / b;
    return "The division is = " + resultDiv;
}

function mod (a, b) {
    resultMod = a % b;
    return "The module is = " + resultMod;
}

console.log(sum (41, 38));
console.log(sub (41, 38));
console.log(mult (41, 38));
console.log(div (41, 38));
console.log(mod (41, 38));
