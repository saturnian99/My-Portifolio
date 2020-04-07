const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (products, prices) => {
  return products.map((product, index) => (
    { [product]: prices[index] }
  ));
};

const listProduct = updateProducts(products, prices);
console.log(listProduct);


updateProducts(products, prices);