// 🚀 5- Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(namesList) {
  return namesList.reduce((aRepetitions, name) => aRepetitions + name.match(/a/gi).length, 0);
}

console.log(containsA(names));
