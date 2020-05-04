
/*
1.1) Teste se o retorno de sum(4, 5) é 9;
1.2) Teste se o retorno de sum(0, 0) é 0;
1.3) Teste se a função 'sum' lança um erro quando os parametros são 4 e "5"(string 5);
1.4) Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5").
*/

const sum = require("./script-e1");

describe("sum", () => {
  it("should add two numbers", () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
  });
  it("should throw error when adding NaN inputs", () => {
    expect(() => { sum(4,"5") }).toThrow();
    expect(() => { sum(4,{}) }).toThrow();
    expect(() => { sum(4,[]) }).toThrow();
  });
  it("should throw 'parameters must be numbers' when adding NaN inputs", () => {
    expect(() => { sum(4,"5") }).toThrow(/parameters must be numbers/);
    expect(() => { sum(4,{}) }).toThrow(/parameters must be numbers/);
    expect(() => { sum(4,[]) }).toThrow(/parameters must be numbers/);
  });
});