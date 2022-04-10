/* Desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'trybe';

let reversedWord = "";

for (i = word.length - 1; i >= 0; i -= 1) {
    reversedWord += word[i];
}

console.log(reversedWord);
