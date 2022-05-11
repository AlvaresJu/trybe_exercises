// 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática, utilizando o objeto a seguir:

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
 