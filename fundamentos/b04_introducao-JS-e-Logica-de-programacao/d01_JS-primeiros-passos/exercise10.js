/*Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.*/

const cost = 42;
const saleCost = 77;
const salesNumber = 1000;

if (cost < 0 ||
    saleCost < 0) {
    console.log("!Error - At least one of the values of product cost or product sale cost is not valid.")
} else {
    let proft = salesNumber * (saleCost - 1.2 * cost);
    console.log("R$ " + proft);
}
