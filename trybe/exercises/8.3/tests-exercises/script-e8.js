const assert = require('assert');

function change(param) {
  return !param;
}

// 8) Utilize assert.ok() para testar uma condição

assert.ok(!change(true));