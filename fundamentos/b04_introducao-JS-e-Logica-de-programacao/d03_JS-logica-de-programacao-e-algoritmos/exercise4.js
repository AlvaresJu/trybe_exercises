/* Escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

const n = 50;

let maximumPrimeNumber = 2;

for (i = 3; i <= n; i += 1) {
    let dividerCounter = 0;
    for (j = 2; j < i; j += 1) {
        if (i % j === 0) {
            dividerCounter += 1;
            break;
        }
    }
    if (dividerCounter === 0) {
        maximumPrimeNumber = i;
    }
}

console.log ("The maximum prime number is = " + maximumPrimeNumber);


// Maneira otimizada de resolver o problema:

// for (i = n; i > maximumPrimeNumber; i -= 1) {
//     let dividerCounter = 0;
//     for (j = 2; j < i; j += 1) {
//         if (i % j === 0) {
//             dividerCounter += 1;
//             break;
//         }
//     }
//     if (dividerCounter === 0) {
//         maximumPrimeNumber = i;
//     }
// }


