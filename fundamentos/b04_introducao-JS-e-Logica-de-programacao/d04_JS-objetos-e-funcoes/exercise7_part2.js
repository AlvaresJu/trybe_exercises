/* Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . */

function checkTheEnd (word, ending) {
    let isTheEnd = true;
    for (let i = 0; i < ending.length; i += 1) {
        if (word[word.length - 1 - i] !== ending[ending.length - 1 - i]) {
            isTheEnd = false;
            break;
        }
    }
    return isTheEnd;
}

console.log(checkTheEnd("joaofernando", "fernan"));
