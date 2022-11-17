import Person from './Person';
import Student from './Student';

const birthDate = new Date('1994/01/25');
const person1 = new Person('juliana', birthDate);

console.log(person1);

const student1 = new Student('Juma', birthDate);
console.log(student1);
