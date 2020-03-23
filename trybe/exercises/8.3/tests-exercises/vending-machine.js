const assert = require("assert");

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  // const { length } = coins;
  let remaining = paid - payable;
  
  if (paid < payable) { throw new Error("Paid value is not enough! No soda for you.")}
  
  for (i in coins) {
    if (coins[i] <= remaining) {
      let repeated = 0;
      while (repeated < remaining) {
        if (repeated + coins[i] > remaining) { break; }
        change.push(coins[i]);
        repeated += coins[i];
      }
      remaining -= repeated;
    }
  }

  return change;
}

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, "Error: Paid value is not enough! No soda for you.");
