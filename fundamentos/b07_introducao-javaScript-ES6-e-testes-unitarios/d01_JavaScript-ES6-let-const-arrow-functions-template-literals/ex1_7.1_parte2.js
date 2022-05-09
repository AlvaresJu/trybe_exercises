/* Crie uma função que receba um número e retorne seu fatorial. (Obs: É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.) */

const fatorial = (number) => {
  let result = 1;
  if (number < 0) {
    console.log(`O número ${number} não possui fatorial`);
    return;
  } else if (number > 0) {
    for (let n = 1; n <= number; n += 1) {
      result *= n;
    }
  }
  return console.log(`${number}! = ${result}`);
}

fatorial(9);



const newFatorial = (number) => number > 1 ? number * newFatorial(number - 1) : 1;

console.log(newFatorial(9));
