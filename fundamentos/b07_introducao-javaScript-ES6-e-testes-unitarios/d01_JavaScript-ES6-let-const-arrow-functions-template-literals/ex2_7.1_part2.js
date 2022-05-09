// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
  const words = phrase.split(' ');
  let longest = words[0];
  for (let index = 1; index < words.length; index += 1) {
    if (longest.length < words[index].length) {
      longest = words[index];
    }
  }
  return console.log(`A maior palavra da frase é: ${longest}`);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
