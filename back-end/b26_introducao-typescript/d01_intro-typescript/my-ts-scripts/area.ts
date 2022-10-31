const readlineSync = require('readline-sync');

const convertionTable = [
  { unit: 'km²', value: 1000000 },
  { unit: 'hm²', value: 10000 },
  { unit: 'dam²', value: 100 },
  { unit: 'm²', value: 1 },
  { unit: 'dm²', value: 0.01 },
  { unit: 'cm²', value: 0.0001 },
  { unit: 'mm²', value: 0.000001 }
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
