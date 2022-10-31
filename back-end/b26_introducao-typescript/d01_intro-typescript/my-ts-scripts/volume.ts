const readlineSync = require('readline-sync');

const convertionTable = [
  { unit: 'km³', value: 1000000000 },
  { unit: 'hm³', value: 1000000 },
  { unit: 'dam³', value: 1000 },
  { unit: 'm³', value: 1 },
  { unit: 'dm³', value: 0.001 },
  { unit: 'cm³', value: 0.000001 },
  { unit: 'mm³', value: 0.000000001 }
];

function convert(value: number, baseUnit: string, convertionUnit: string): number {
  const baseIndex = convertionTable.findIndex(({ unit }) => unit === baseUnit);
  const convertionIndex = convertionTable.findIndex(({ unit }) => unit === convertionUnit);

  return value * convertionTable[baseIndex].value / convertionTable[convertionIndex].value;
}

function exec(): void {
  const inputValue = readlineSync.questionFloat('Enter the value to be converted: \n');
  
  const unitOptions = convertionTable.map(({ unit }) => unit);
  const baseIndex = readlineSync.keyInSelect(unitOptions, 'Choose a number for the base unit:');
  const convertionIndex = readlineSync.keyInSelect(unitOptions, 'Choose a number for the convertion unit:');

  const convertedValue = convert(inputValue, unitOptions[baseIndex], unitOptions[convertionIndex]);

  console.log(`${inputValue}${unitOptions[baseIndex]} is iqual to ${convertedValue}${unitOptions[convertionIndex]}`);
}

exec();

export {};
