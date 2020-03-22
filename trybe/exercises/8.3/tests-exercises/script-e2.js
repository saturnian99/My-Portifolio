const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

/*
2.1) Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado;
2.2) Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado.
*/

assert(myIndexOf([1, 2, 3, 4], 3) == 2, "Searched index for 3 === 2");
assert(myIndexOf([1, 2, 3, 4], 5) == -1, "Searched index for 5 === -1");