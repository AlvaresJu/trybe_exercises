/* Usando o objeto abaixo, faça o exercício a seguir: Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101". */

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
};

let keys = Object.keys(moradores.blocoDois[moradores.blocoDois.length - 1]);

console.log("O morador do bloco 2 de " + keys[0] + " " + moradores.blocoDois[moradores.blocoDois.length - 1].nome + " " + moradores.blocoDois[moradores.blocoDois.length - 1].sobrenome + " mora no " + moradores.blocoDois[moradores.blocoDois.length - 1].andar + "° " + keys[2] + ", " + keys[keys.length - 1] + " " + moradores.blocoDois[moradores.blocoDois.length - 1].apartamento);
