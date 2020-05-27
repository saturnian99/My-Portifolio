const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:

function addOne (array) {
  const old = array.slice();
  for (i in array) { old.push(1); }
  console.log(old);
  
  return old;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected, "myArray doesn't changed!");
assert.deepEqual(myArray, unchanged, "myArray changed!");
