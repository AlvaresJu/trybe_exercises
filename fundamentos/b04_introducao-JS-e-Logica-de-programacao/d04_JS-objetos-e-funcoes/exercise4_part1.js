/* Usando o objeto abaixo, faça o que se pede a seguir: Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = "Sim";

for (let key in info) {
    console.log(info[key]);
}
