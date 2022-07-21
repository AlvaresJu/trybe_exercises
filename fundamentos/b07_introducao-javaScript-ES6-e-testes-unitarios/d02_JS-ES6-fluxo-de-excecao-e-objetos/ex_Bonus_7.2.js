// 1. 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática, utilizando o objeto a seguir:

const allLessons = {
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};

 function countMathStudents (allLessons) {
  const arrayOfLessons = Object.values(allLessons);
  let students = 0;
  for (let index = 0; index < arrayOfLessons.length; index += 1) {
    if (arrayOfLessons[index].materia === 'Matemática') {
      students += arrayOfLessons[index].numeroEstudantes;
    }
  }
  return students;
 }

 console.log(countMathStudents(allLessons));

//  2. 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o mesmo objeto de entrada do exercício anterior:

function createReport (allLessons, professor) {
  const arrayOfLessons = Object.values(allLessons);
  let students = 0;
  const lessons = [];
  for (let index = 0; index < arrayOfLessons.length; index += 1) {
    if (arrayOfLessons[index].professor === professor) {
      students += arrayOfLessons[index].numeroEstudantes;
      lessons.push(arrayOfLessons[index].materia);
    }
  }
  return {professor: `${professor}`,
          aulas: lessons,
          estudantes: students};
}

console.log(createReport(allLessons, 'Maria Clara'));
