const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/*
4.1) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
4.2) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
4.3) Verifique que o array passado por parâmetro não sofreu alterações;
4.4) Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
*/

assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "[1, 2, 3, 4] - [3] == [1, 2, 4]");
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], "[1, 2, 3, 4] - [3] != [1, 2, 3, 4]");
assert.deepEqual(myRemove([1, 2, 3, 4]), [1, 2, 3, 4], "The array hasn't changed");
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], "[1, 2, 3, 4] - [5] == [1, 2, 3, 4]")
