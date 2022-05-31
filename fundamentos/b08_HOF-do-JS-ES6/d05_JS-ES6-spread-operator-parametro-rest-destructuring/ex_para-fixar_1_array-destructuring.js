// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); 

const [saudacaoOla, sudacaoFunc] = saudacoes;
sudacaoFunc(saudacaoOla);