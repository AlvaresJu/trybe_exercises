function convert(value: number, baseUnit: string, convertionUnit: string): number {
  const convertionTable = [
    { unit: 'km', value: 1000 },
    { unit: 'hm', value: 100 },
    { unit: 'dam', value: 10 },
    { unit: 'm', value: 1 },
    { unit: 'dm', value: 0.1 },
    { unit: 'cm', value: 0.01 },
    { unit: 'mm', value: 0.001 }
  ];

  const baseIndex = convertionTable.findIndex(({ unit }) => unit === baseUnit);
  const convertionIndex = convertionTable.findIndex(({ unit }) => unit === convertionUnit);

  return value * convertionTable[baseIndex].value / convertionTable[convertionIndex].value;
}
