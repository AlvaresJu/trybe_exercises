// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => numbers.reduce((sum, number) => sum + number, 0);

console.log(sum(1, 4, 5, 10));
console.log(sum());
console.log(sum(1, -5, 10));
