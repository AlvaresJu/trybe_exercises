/* Faça um programa que diz se um número definido numa variável é primo ou não. */

let n = 47;

if (n <= 1) {
    console.log("It is not a prime number");
} else {
    let dividerCounter = 0;
    for (let i = 2; i <= n; i += 1) {
        if (n % i === 0) {
            dividerCounter += 1; 
        }
    }
    if (dividerCounter > 1) {
        console.log("It is not a prime number");
    } else {
        console.log("It is a prime number");
    }
}