const readlineSync = require('readline-sync');

const convertionTable: {[key: string]: number} = {
  km2: 1000000,
  hm2: 10000,
  dam2: 100,
  m2: 1,
  dm2: 0.01,
  cm2: 0.0001,
  mm2: 0.000001,
};

function convert(value: number, baseUnit: string, convertionUnit: string): number {
  return value * convertionTable[baseUnit] / convertionTable[convertionUnit];
}

function exec(): void {
  const inputValue: number = readlineSync.questionFloat('Enter the value to be converted: \n');
  
  const unitOptions: string[] = Object.keys(convertionTable);
  const baseIndex: number = readlineSync.keyInSelect(unitOptions, 'Choose a number for the base unit:');
  const convertionIndex: number = readlineSync.keyInSelect(unitOptions, 'Choose a number for the convertion unit:');

  const baseUnit: string = unitOptions[baseIndex];
  const convertionUnit: string = unitOptions[convertionIndex];
  const convertedValue = convert(inputValue, baseUnit, convertionUnit);

  console.log(`${inputValue}${baseUnit} is iqual to ${convertedValue}${convertionUnit}`);
}

exec();

export {};
