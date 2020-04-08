const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (products, prices) => {
  return products.map((product, index) => (
    { [product]: prices[index] }
  ));
};

const listProduct = updateProducts(products, prices);

const assert = require('assert');
const result = updateProducts(['Miojo', 'Banana'], [3.12]);
const expected = [{ Miojo: 3.12 }, { Banana: undefined }];
assert.deepEqual(result, expected);
