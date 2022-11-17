import Student from './Student';
import Person from './Person';

const student1 = new Student('1516651312341545', 'Maria de Amaral');
student1.testScores = [24, 1, 45, 47];
student1.workScores = [42, 44];

console.log(student1);
console.log(student1.calculateAverageScore());
console.log(student1.calculateTotalScore());

const student2 = new Student('4654324132135645', 'Joaquina Pereira');

console.log(student2);

const birthDate = new Date('1994/01/25');
const person1 = new Person('juliana', birthDate);

console.log(person1);
