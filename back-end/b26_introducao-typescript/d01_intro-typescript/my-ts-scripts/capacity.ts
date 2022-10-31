function convert(value: number, baseUnit: string, convertionUnit: string): number {
  const convertionTable = [
    { unit: 'kl', value: 1000 },
    { unit: 'hl', value: 100 },
    { unit: 'dal', value: 10 },
    { unit: 'l', value: 1 },
    { unit: 'dl', value: 0.1 },
    { unit: 'cl', value: 0.01 },
    { unit: 'ml', value: 0.001 }
  ];

  const baseIndex = convertionTable.findIndex(({ unit }) => unit === baseUnit);
  const convertionIndex = convertionTable.findIndex(({ unit }) => unit === convertionUnit);

  return value * convertionTable[baseIndex].value / convertionTable[convertionIndex].value;
}

export { convert };
