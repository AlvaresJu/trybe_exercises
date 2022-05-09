/* aça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */

const n = 5;

if (n > 1) {
    for (let rows = 1; rows <= n; rows += 1) {
        let asteriskRow = "";
        for (let columns = 1; columns <= n; columns += 1) {
            asteriskRow += "*";
        }
        console.log(asteriskRow);
    }
} else {
    console.log ("n need to be a number > 1");
}
