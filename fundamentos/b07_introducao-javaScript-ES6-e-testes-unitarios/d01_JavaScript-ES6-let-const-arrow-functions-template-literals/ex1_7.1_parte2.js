/* Crie uma função que receba um número e retorne seu fatorial. (Obs: É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.) */

const fatorial = (number) => {
  let result = 1;
  if (number < 0) {
    console.log(`O número ${number} não possui fatorial`);
    return;
  }

  for (let n = 2; n <= number; n += 1) {
    result *= n;
  }
  
  console.log(`${number}! = ${result}`);
}

fatorial(9);



const newFatorial = (number) => number > 1 ? number * newFatorial(number - 1) : 1;

console.log(`9! = ${newFatorial(9)}`);
