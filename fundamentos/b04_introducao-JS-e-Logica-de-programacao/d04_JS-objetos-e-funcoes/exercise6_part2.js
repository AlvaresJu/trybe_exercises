/* Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N. */

function sumUpToNumber (n) {
    if (Number.isInteger(n) &&
        n >= 0) {
        let sum = 0;
        for (number = 0; number <= n; number += 1) {
            sum += number;
        }
        return sum;
    } else {
        return "n is not a vilid number";
    }
}

console.log(sumUpToNumber(5));
