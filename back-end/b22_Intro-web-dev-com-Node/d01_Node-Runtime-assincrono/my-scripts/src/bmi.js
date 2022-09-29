function calculatesBMI(weight, height) {
  const bmi = weight / (height ** 2);
  return bmi.toFixed(2);
}

function main() {
  console.log('Weight: 63 kg, Height: 1.70 m');
  const bmi = calculatesBMI(63, 1.70);
  console.log(`BMI = ${bmi}`);
}

main();
