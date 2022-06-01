const uppercase = require('./ex_7_9.1');

// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

describe('Testes para a função assíncrona uppercase', () => {
  test('Testa se ao passar uma palavra para a função, ela transforma as letras em maiúsculas', (done) => {
    uppercase('assíncrono', (result) => {
      try {
        expect(result).toBe('ASSÍNCRONO');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
