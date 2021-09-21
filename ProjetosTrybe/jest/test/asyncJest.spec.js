// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// Feito com ajuda de Matheus Duarte T13|Tribo A
// Pesquisado em :
// https://jestjs.io/pt-BR/docs/expect
// https://jestjs.io/pt-BR/docs/expect#rejects
// https://jestjs.io/pt-BR/docs/expect#tobevalue
// https://jestjs.io/pt-BR/docs/expect#tothrowerror

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    await expect(answerPhone(false)).rejects.toThrow('Infelizmente não podemos atender...');
  });
});
