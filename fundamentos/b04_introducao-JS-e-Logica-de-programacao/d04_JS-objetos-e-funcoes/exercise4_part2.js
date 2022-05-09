/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */

function longestName (array) {
    let name = array[0];
    for (let index in array) {
        if (array[index].length > name.length) {
            name = array[index];
        }
    }
    return name;
}

console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
