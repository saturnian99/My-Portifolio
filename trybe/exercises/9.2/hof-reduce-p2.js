const sumEvenNumbers = numbers => numbers.reduce((result, number) => number % 2 === 0 ? result + number : result);

const assert = require('assert');
const testNumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
assert.equal(sumEvenNumbers(testNumbers), 152);
