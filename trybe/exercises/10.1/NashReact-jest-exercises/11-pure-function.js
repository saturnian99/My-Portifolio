// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  const copy = Object.assign({}, item);
  copy.price = price;
  return copy;
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  const copy = cart.slice();
  copy.push(item);
  return copy;
};

module.exports = {setPrice, addToCart};