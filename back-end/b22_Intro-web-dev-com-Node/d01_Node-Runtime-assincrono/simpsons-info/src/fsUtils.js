const fs = require('fs').promises;
const path = require('path');

const simpsosJsonPath = '../data/simpsons.json';
const simpsonFamilyJsonPath = '../data/simpsonFamily.json';

const readSimpsonsCharactersData = async (filePath) => {
  try {
    const charactersData = await fs.readFile(
      path.resolve(__dirname, filePath),
      'utf-8',
    );
    const characters = JSON.parse(charactersData);
    return characters;
  } catch (err) {
    console.error(`File reading error: ${err.message}`);
  }
};

const writeSimpsonsCharactersData = async (charactersData, filePath) => {
  const formatedData = JSON.stringify(charactersData);
  try {
    await fs.writeFile(path.resolve(__dirname, filePath), formatedData);
  } catch (err) {
    console.error(`File writing error: ${err.message}`);
  }
};

const printSimpsonsCharacters = async () => {
  const characters = await readSimpsonsCharactersData(simpsosJsonPath);
  const formatedChar = characters.map((char) => `${char.id} - ${char.name}`);
  formatedChar.forEach((char) => console.log(char));
};

const searchCharacterById = async (id) => {
  const characters = await readSimpsonsCharactersData(simpsosJsonPath);
  try {
    const character = characters.find((char) => Number(char.id) === id);
    if (!character) throw new Error('id not found');
    return character;
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

const removeCharacterId10And6 = async () => {
  const characters = await readSimpsonsCharactersData(simpsosJsonPath);
  const filteredCharacters = characters.filter((char) => char.id !== '10' && char.id !== '6');
  await writeSimpsonsCharactersData(filteredCharacters, simpsosJsonPath);
};

const filterSimpsonsFamily = async () => {
  const characters = await readSimpsonsCharactersData(simpsosJsonPath);
  const simpsonsFamily = characters.filter((char) => Number(char.id) <= 4);
  await writeSimpsonsCharactersData(simpsonsFamily, simpsonFamilyJsonPath);
};

const searchCharacterByName = async (name) => {
  const characters = await readSimpsonsCharactersData(simpsosJsonPath);
  try {
    const character = characters.find((char) => char.name === name);
    if (!character) throw new Error('character name not found');
    return character;
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

const addNelsonMuntzInSinpsonsFamily = async () => {
  const nelsonMuntzData = await searchCharacterByName('Nelson Muntz');
  const simpsonFamily = await readSimpsonsCharactersData(simpsonFamilyJsonPath);
  const newFamilyData = [...simpsonFamily, nelsonMuntzData];
  await writeSimpsonsCharactersData(newFamilyData, simpsonFamilyJsonPath);
};

const replaceNelsonWithMaggieInFamily = async () => {
  const simpsonFamily = await readSimpsonsCharactersData(simpsonFamilyJsonPath);
  const maggieData = await searchCharacterByName('Maggie Simpson');
  const nelsonIndexInFamily = simpsonFamily.findIndex((char) => char.name === 'Nelson Muntz');
  simpsonFamily.splice(nelsonIndexInFamily, 1, maggieData); // Mesma coisa de: simpsonFamily[nelsonIndexInFamily] = maggieData;
  await writeSimpsonsCharactersData(simpsonFamily, simpsonFamilyJsonPath);
};

module.exports = {
  printSimpsonsCharacters,
  searchCharacterById,
  removeCharacterId10And6,
  filterSimpsonsFamily,
  addNelsonMuntzInSinpsonsFamily,
  replaceNelsonWithMaggieInFamily,
};
