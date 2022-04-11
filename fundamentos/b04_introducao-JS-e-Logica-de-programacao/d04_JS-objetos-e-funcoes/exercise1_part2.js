/* Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

function palimdrome (word) {
    let isPalimdrome = true;
    for (let i = 0; i < word.length; i += 1) {
        if (word[i] !== word[word.length - 1 - i]) {
            isPalimdrome = false;
        }
    }
    return isPalimdrome;
}

console.log(palimdrome("arara"));
