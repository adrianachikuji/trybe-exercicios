const sum = require('./sum.js');

describe('testar a função sum'), () => {
 it( 'deve retornar o resultado da soma', () => {
    experct(sum (4, 5).toBe(9));
    experct(sum(0, 0).toBe(0));
 });
 it('deve disparar um erro caso receba como parâmetro uma string', () => {
   expect(() => sum(4, '5')).toThrowError();
   expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
 });
}