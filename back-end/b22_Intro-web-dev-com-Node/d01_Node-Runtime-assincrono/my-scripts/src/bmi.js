const readline = require('readline-sync');

function calculatesBMI(weight, height) {
  const bmi = weight / (height ** 2);
  return bmi.toFixed(2);
}

function main() {
  const weight = readline.questionFloat('What’ your weight in Kg? ');
  const height = readline.questionFloat('What’ your height in m? ');

  console.log(`Weight: ${weight} kg, Height: ${height}0 m`);

  const bmi = calculatesBMI(weight, height);
  console.log(`BMI = ${bmi}`);
}

main();
