const { 
  printSimpsonsCharacters,
  searchCharacterById,
  removeCharacterId10And6,
  filterSimpsonsFamily,
  addNelsonMuntzInSinpsonsFamily,
  replaceNelsonWithMaggieInFamily,
} = require('./fsUtils');

const main = async () => {
  await printSimpsonsCharacters();

  const simpsonsCharacter = await searchCharacterById(4);
  if (simpsonsCharacter) console.log(simpsonsCharacter);

  await removeCharacterId10And6();
  await filterSimpsonsFamily();
  await addNelsonMuntzInSinpsonsFamily();
  await replaceNelsonWithMaggieInFamily();
};

main();
