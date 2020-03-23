const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

/*
5.1) Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado;
5.2) Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado;
5.3) Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado;
5.4) Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado;
5.5) Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado.
*/

assert(myFizzBuzz(15) == "fizzbuzz", "15 is divisible by 3 and 5 == 'fizzbuzz'");
assert(myFizzBuzz(3) == "fizz", "3 is divisible by 3 == 'fizz'");
assert(myFizzBuzz(5) == "buzz", "5 is divisible by 5 == 'buzz'");
assert(myFizzBuzz(2) == 2, "2 is not divisible by 3 and/or 5 == 2");
assert(myFizzBuzz("bug") == false, "'bug' is NaN == false");