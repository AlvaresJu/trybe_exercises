// 🚀 5- Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(namesList) {
  return namesList.reduce((aRepetitions, name) => {
    if (name.match(/a/gi) !== null) return aRepetitions + name.match(/a/gi).length;
    return aRepetitions;
  }, 0);
};

console.log(containsA(names));
