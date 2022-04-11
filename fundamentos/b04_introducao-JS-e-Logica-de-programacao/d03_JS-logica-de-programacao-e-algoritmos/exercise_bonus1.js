/* aça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */

const n = 5;

for (rows = 1; rows <= n; rows += 1) {
    asteriskRow = "";
    for (columns = 1; columns <= n; columns += 1) {
        asteriskRow += "*";
    }
    console.log(asteriskRow);
}
