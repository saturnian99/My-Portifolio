// Neste exemplo, serão comparados valores para buscar o maior valor em um array.
// Tente criar essa função apenas com for e depois tente com reduce.

const biggerNumber = numbers => numbers.reduce((bigger, number) => number > bigger ? number : bigger);

const assert = require('assert');
const testNumbers = [1, 5, 2, 3, 20, 10];
assert.equal(biggerNumber(testNumbers), 20);
