const readline = require('readline-sync');

function calculatesBMI(weight, height) {
  const bmi = weight / (height ** 2);
  return bmi;
}

function setBMICategory(bmi) {
  if (bmi < 18.5) return 'Underweight (thin)';
  if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
  if (bmi >= 25 && bmi < 30) return 'Overweight';
  if (bmi >= 30 && bmi < 35) return 'Grade I obesity';
  if (bmi >= 35 && bmi < 40) return 'Grade II obesity';
  return 'Grade III and IV obesity';
}

function main() {
  const weight = readline.questionFloat('What’ your weight in Kg? ');
  const height = readline.questionFloat('What’ your height in m? ');

  console.log(`Weight: ${weight} kg, Height: ${height}0 m`);

  const calculatedBMI = calculatesBMI(weight, height);
  console.log(`BMI = ${calculatedBMI.toFixed(2)}`);

  const bmiCategory = setBMICategory(calculatedBMI);
  console.log(`BMI status = ${bmiCategory}`);
}

main();
