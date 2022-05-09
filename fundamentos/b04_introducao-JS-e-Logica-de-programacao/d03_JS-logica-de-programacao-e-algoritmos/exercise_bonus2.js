/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com n asteriscos de base. */

const n = 5;

if (n > 1) {
    let asteriskRow = ""
    for (let rows = 1; rows <= n; rows += 1) {
        asteriskRow += "*";
        console.log(asteriskRow);
    }
} else {
    console.log ("n need to be a number > 1");
}
