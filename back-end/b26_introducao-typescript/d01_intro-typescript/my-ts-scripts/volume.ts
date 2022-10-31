function convert(value: number, baseUnit: string, convertionUnit: string): number {
  const convertionTable = [
    { unit: 'km³', value: 1000000000 },
    { unit: 'hm³', value: 1000000 },
    { unit: 'dam³', value: 1000 },
    { unit: 'm³', value: 1 },
    { unit: 'dm³', value: 0.001 },
    { unit: 'cm³', value: 0.000001 },
    { unit: 'mm³', value: 0.000000001 }
  ];

  const baseIndex = convertionTable.findIndex(({ unit }) => unit === baseUnit);
  const convertionIndex = convertionTable.findIndex(({ unit }) => unit === convertionUnit);

  return value * convertionTable[baseIndex].value / convertionTable[convertionIndex].value;
}

export { convert };
