/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. */

function repeatedNumber (arrayNumbers) {
    
    let numbeOfRepetitions = [];
    for (let namberA of arrayNumbers) {
       let repetitions = 0;       
       for (let numberB of arrayNumbers) {
           if (namberA === numberB) {
               repetitions += 1;
           }
       }
       numbeOfRepetitions.push(repetitions);
    }
    
    let position = 0;
    for (let index in numbeOfRepetitions) {
        if (numbeOfRepetitions[index] > numbeOfRepetitions[position]) {
            position = index;
        }
    }
    return arrayNumbers[position];
}

console.log(repeatedNumber([2, 3, 2, 5, 8, 2, 3]));
