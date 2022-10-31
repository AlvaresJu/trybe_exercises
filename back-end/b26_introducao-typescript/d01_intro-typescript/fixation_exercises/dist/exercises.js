"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapezoid = exports.rhombus = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
// função que recebe um nome e o imprime na tela com o texto “Olá Nome”.
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// função que mostra na tela o nome da pessoa e sua idade.
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// função que faz a adição de todos os números que estão dentro de um array.
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// função que calcula a área de um triângulo.
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
// função que calcula a área de um quadrado.
function square(side) {
    return side ** 2;
}
exports.square = square;
// função que calcula a área de um retângulo.
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// função que calcula a área de um losango.
function rhombus(majorDiag, minorDiag) {
    return (majorDiag * minorDiag) / 2;
}
exports.rhombus = rhombus;
// função que calcula a área de um trapézio.
function trapezoid(height, largerBase, smallerBase) {
    return ((largerBase + smallerBase) * height) / 2;
}
exports.trapezoid = trapezoid;
// função que calcula a área de um círculo.
function circle(radius) {
    return 3.14 * radius ** 2;
}
exports.circle = circle;
