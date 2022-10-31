/* Considere um array de strings. Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > biggestWord.length) {
        biggestWord = array[i];
    }

    if (array[i].length < smallestWord.length) {
        smallestWord = array[i];
    }
}

console.log("The biggest word is: " + biggestWord);
console.log("The smallest word is: " + smallestWord);
