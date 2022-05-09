/* 🚀 Crie um código JavaScript com a seguinte especificação:
- Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
- Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
- Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.*/

const replaceX = (word) => {
  let replaceArray = ('Tryber x aqui!').split('x');
  let replacedPhrase = replaceArray[0];
  for (let index = 1; index < replaceArray.length; index += 1) {
    replacedPhrase += `${word}${replaceArray[index]}`;
  }
    return replacedPhrase;
}

const skills = ['JavaScript', 'HTML', 'CSS', 'Git', 'ES6'];

const concat = (personPhrase) => {
  let result = `${personPhrase}

Minhas cinco principais habilidades são:`;

  for (let skill of skills.sort()) {
    result += `
• ${skill};`
  }
  
  result += `

#goTrybe.`

  console.log(result);
}

concat(replaceX('Juliana'));
