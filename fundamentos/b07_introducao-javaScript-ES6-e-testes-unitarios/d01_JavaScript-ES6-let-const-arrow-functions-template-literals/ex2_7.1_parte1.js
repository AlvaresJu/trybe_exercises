/* 🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
- Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
- Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números. */

const sortArray = (oddsAndEvens) => {
  for (let i = 1; i < oddsAndEvens.length; i += 1) {
    for (let s = 0; s < i; s += 1) {
      if (oddsAndEvens[i] < oddsAndEvens[s]) {
        let keepNumber = oddsAndEvens[s];
        oddsAndEvens[s] = oddsAndEvens[i];
        oddsAndEvens[i] = keepNumber;
      }
    }
  }
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
}

sortArray([13, 3, 4, 10, 7, 2]);



const newSortArray = (oddsAndEvens) => console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

newSortArray([13, 3, 4, 10, 7, 2]);