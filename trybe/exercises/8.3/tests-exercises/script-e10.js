const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

/*
10) Faça o teste de uma função que compara dois números e 
retorna true se o primeiro for maior que o segundo e false caso contrário.
*/

assert(isAbove(1, 2) == false);
assert(isAbove(2, 1) == true);