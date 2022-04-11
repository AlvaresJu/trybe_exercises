/* Crie um algoritmo que retorne o fatorial de 10. */

const n = 10;

if (n >= 1) {
    let factorial = 1;
    for (let i = 1; i <= n; i += 1) {
        factorial *= i;
    }
    console.log(n + "! = " + factorial);
} else {
    console.log("n is not a valid number");
}
