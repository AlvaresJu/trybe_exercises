// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

const specialFruit = ['morango', 'maga', 'banana'];

const additionalItens = ['abcaxi', 'pêra', 'mamão'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
