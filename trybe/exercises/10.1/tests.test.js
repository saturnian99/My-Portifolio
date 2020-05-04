const sum = require("./script-e1");
const myIndexOf = require("./script-e2");

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

describe("myIndexOf", () => {
  it("should fetch index of searched item", () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  });
  it("should return -1 if item was not found", () => {
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
});
