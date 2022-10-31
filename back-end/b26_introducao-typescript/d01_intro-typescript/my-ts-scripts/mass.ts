function convert(value: number, baseUnit: string, convertionUnit: string): number {
  const convertionTable = [
    { unit: 'kg', value: 1000 },
    { unit: 'hg', value: 100 },
    { unit: 'dag', value: 10 },
    { unit: 'g', value: 1 },
    { unit: 'dg', value: 0.1 },
    { unit: 'cg', value: 0.01 },
    { unit: 'mg', value: 0.001 }
  ];

  const baseIndex = convertionTable.findIndex(({ unit }) => unit === baseUnit);
  const convertionIndex = convertionTable.findIndex(({ unit }) => unit === convertionUnit);

  return value * convertionTable[baseIndex].value / convertionTable[convertionIndex].value;
}

export { convert };
