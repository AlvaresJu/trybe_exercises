// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([model, manufacturer, year]) => ({
  model,
  manufacturer,
  year,
});

// Minha adição ao exercício:
const cars = [palio, shelbyCobra, chiron];
const objectsSet = (arrayCars) => arrayCars.map(toObject);

console.log(objectsSet(cars));
