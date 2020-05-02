const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

/*
3.1) Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10;
3.2) Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado.
*/

assert(mySum([1, 2, 3, 4]) == 10, "1 + 2 + 3 + 4 == 10");
assert(mySum([1, -2, -3, 4]) == 0, "1 - 2 - 3 + 4 == 0");