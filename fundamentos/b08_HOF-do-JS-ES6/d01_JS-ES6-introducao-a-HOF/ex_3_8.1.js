// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const checkAnswerPoints = (answer, rightAnswer) => {
if (answer === 'N.A') return 0;
if (answer === rightAnswer) return 1;
return -0.5;
}

const countStudentAnswerPoints = (studentAnswers, rightAnswers, checkFunc) => {
  let studentPoints = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    studentPoints += checkFunc(studentAnswers[index], rightAnswers[index]);
  }
  return studentPoints;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(countStudentAnswerPoints(STUDENT_ANSWERS, RIGHT_ANSWERS, checkAnswerPoints));
