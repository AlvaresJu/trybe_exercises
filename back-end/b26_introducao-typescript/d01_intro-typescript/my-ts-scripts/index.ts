const readlineSync = require('readline-sync');

const convertions = [
  { name: "Length convertion", script: "./length" },
  { name: "Mass convertion", script: "./mass" },
  { name: "Capacity convertion", script: "./capacity" },
  { name: "Area convertion", script: "./area" },
  { name: "Volume convertion", script: "./volume" }
];

const convertionOptions = convertions.map(({ name }) => name);

const convertionIndex = readlineSync.keyInSelect(convertionOptions, 'Choose a number for the convertion unit option');

require(convertions[convertionIndex].script);
