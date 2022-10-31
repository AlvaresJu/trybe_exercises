// função que recebe um nome e o imprime na tela com o texto “Olá Nome”.
export function greeter(name: string):string {
  return `Olá ${name}!`;
}

// função que mostra na tela o nome da pessoa e sua idade.
export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

// função que faz a adição de todos os números que estão dentro de um array.
export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// função que calcula a área de um triângulo.
export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

// função que calcula a área de um quadrado.
export function square(side: number): number {
  return side ** 2;
}

// função que calcula a área de um retângulo.
export function rectangle(base: number, height: number): number {
  return base * height;
}

// função que calcula a área de um losango.
export function rhombus(majorDiag: number, minorDiag: number): number {
  return (majorDiag * minorDiag) / 2;
}

// função que calcula a área de um trapézio.
export function trapezoid(height: number, largerBase: number, smallerBase: number): number {
  return ((largerBase + smallerBase) * height) / 2;
}

// função que calcula a área de um círculo.
export function circle(radius: number): number {
  return 3.14 * radius ** 2;
}
