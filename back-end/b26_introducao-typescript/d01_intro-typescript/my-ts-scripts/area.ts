function convert(value: number, baseUnit: string, convertionUnit: string): number {
  const convertionTable = [
    { unit: 'km²', value: 1000000 },
    { unit: 'hm²', value: 10000 },
    { unit: 'dam²', value: 100 },
    { unit: 'm²', value: 1 },
    { unit: 'dm²', value: 0.01 },
    { unit: 'cm²', value: 0.0001 },
    { unit: 'mm²', value: 0.000001 }
  ];

  const baseIndex = convertionTable.findIndex(({ unit }) => unit === baseUnit);
  const convertionIndex = convertionTable.findIndex(({ unit }) => unit === convertionUnit);

  return value * convertionTable[baseIndex].value / convertionTable[convertionIndex].value;
}

export { convert };
