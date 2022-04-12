/* A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates... */

function fruitsInBasket (basket) {
    
    let numberOfFruitsInBasket = new Object();
    for (let i = 0; i < basket.length; i += 1) {
        let containedInTheObject = false;
        for (let key in numberOfFruitsInBasket) {            
            if (basket[i] === key) {
                containedInTheObject = true;
                break;
            }
        }
        if (containedInTheObject === false) { 
            let repetitions = 0;
            for (let nextFruit of basket) {
                if (basket[i] === nextFruit) {
                    repetitions += 1;
                }                
            }
            numberOfFruitsInBasket[basket[i]] = repetitions;                          
        }
    }
    return numberOfFruitsInBasket;
}

let result = fruitsInBasket (['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja', 'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia', 'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate', 'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva', 'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva', 'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia', 'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia', 'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana', 'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva', 'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca', 'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana', 'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca', 'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva', 'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca', 'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca', 'Banana', 'Pera', 'Abacate', 'Uva',]);
let imprima = "Sua cesta possui: ";
for (let keyFruit in result) {
    imprima += (result[keyFruit] + " " + keyFruit + "s, ");
}
console.log(imprima);
