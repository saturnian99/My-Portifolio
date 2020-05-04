const sum = require("./script-e1");
const myIndexOf = require("./script-e2");
const mySum = require("./script-e3");
const myRemove = require("./script-e4");
const myFizzBuzz = require("./script-e5");
const thereIs = require("./script-e6");
const thereIsFunction = require("./script-e7");
const change = require("./script-e8");
const {obj1, obj2} = require("./script-e9");

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

describe("mySum", () => {
  it("should sum all numbers", () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
    expect(mySum([1, -2, -3, 4])).toBe(0);
  });
});

describe("myRemove", () => {
  it("should remove a element from a array", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("myFizzBuzz", () => {
  it("should return 'fizzbuzz' when number is divisible by both 3 and 5", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  it("should return 'fizz' if number is divisible only by 3", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });
  it("should return 'buzz' if number is divisible only by 5", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  })
  it("should return the number if it's not divisible by 5 or 3", () => {
    expect(myFizzBuzz(2)).toBe(2);
  })
  it("should return 'false' if input is NaN", () => {
    expect(myFizzBuzz('bug')).toBeFalsy();
  })
});

describe("thereIs", () => {
  it("variable 'thereIs' should be defined", () => {
    expect(thereIs).toBeDefined();
  });
});

describe("thereIsFunction", () => {
  it("funtion 'thereIs' should be defined", () => {
    expect(thereIsFunction).toBeDefined();
  });
});

describe("change", () => {
  it("should return truthy", () => {
    expect(!change(true)).toBeTruthy();
  });
});

describe("obj1 and obj2", () => {
  it("the two objects should be deep equal", () => {
    expect(obj1).toEqual(obj2);
  });
});