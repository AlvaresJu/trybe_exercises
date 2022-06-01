// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

const { getPokemonDetails } = require("./ex_8_9.1");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails(({ name }) => name === 'Kadabra', (err, pokemonMessage) => {
      try {
        expect(err).toEqual(expectedError);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedMessage = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    getPokemonDetails(({ name }) => name === 'Charmander', (err, pokemonMessage) => {
      try {
        expect(pokemonMessage).toBe(expectedMessage);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
