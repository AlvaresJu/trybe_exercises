const readline = require('readline-sync');

const BMIrange = [
  {
    BMICategory: 'Underweight',
    minBMI: 0,
    maxBMI: 18.4,
  },
  {
    BMICategory: 'Normal Weight',
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  {
    BMICategory: 'Overweight',
    minBMI: 25,
    maxBMI: 29.9,
  },
  {
    BMICategory: 'Obese Class I',
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  {
    BMICategory: 'Obese Class II',
    minBMI: 35,
    maxBMI: 39.9,
  },
  {
    BMICategory: 'Obese Class III and IV',
    minBMI: 40,
    maxBMI: 210,
  },
];

function calculatesBMI(weight, height) {
  const bmi = weight / (height ** 2);
  return bmi;
}

function setBMICategory(bmi) {
  const BMICategoryData = BMIrange
    .find((category) => bmi >= category.minBMI && bmi < category.maxBMI);
  return BMICategoryData.BMICategory;
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
