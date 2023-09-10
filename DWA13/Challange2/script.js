const products = [
  { product: 'banana', price: '2' },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: '8' },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

console.log(
  // Exercise 1: Use forEach to console.log each product name.
  'Exercise 1: Print product names'
);
products.forEach((product) => {
  console.log(product.product);
});

console.log(
  // Exercise 2: Use filter to filter out products that have a name longer than 5 characters.
  'Exercise 2: Filter products with names <= 5 characters'
);
const filteredProducts = products.filter((product) => product.product.length <= 5);
console.log(filteredProducts);

console.log(
  // Exercise 3: Using both filter and map. Convert all prices that are strings to numbers,
  // and remove all products from the array that do not have prices.
  'Exercise 3: Convert prices to numbers and calculate total price'
);
const validPrices = products
  .filter((product) => product.price !== '' && !isNaN(Number(product.price)))
  .map((product) => ({
    ...product,
    price: Number(product.price),
  }));
const totalPrice = validPrices.reduce((acc, product) => acc + product.price, 0);
console.log('Valid Prices:', validPrices);
console.log('Total Price:', totalPrice);

console.log(
  // Exercise 4: Use reduce to concatenate all product names.
  'Exercise 4: Concatenate product names'
);
const productNames = products.map((product) => product.product);
const concatenatedNames = productNames.reduce((acc, name) => `${acc}, ${name}`);
console.log('Concatenated Names:', concatenatedNames);

console.log(
  // Exercise 5: Use reduce to calculate both the highest and lowest-priced items.
  'Exercise 5: Find highest and lowest priced items'
);
const priceInfo = products.reduce(
  (acc, product) => {
    const price = Number(product.price);
    if (isNaN(price)) return acc;
    if (!acc.highest || price > acc.highest.price) {
      acc.highest = { name: product.product, price };
    }
    if (!acc.lowest || price < acc.lowest.price) {
      acc.lowest = { name: product.product, price };
    }
    return acc;
  },
  { highest: null, lowest: null }
);
console.log('Highest:', priceInfo.highest);
console.log('Lowest:', priceInfo.lowest);

console.log(
  // Exercise 6: Using only Object.entries and reduce, recreate the object with changed keys (product to name, price to cost).
  'Exercise 6: Modify object keys'
);
const modifiedProducts = products.reduce((acc, product) => {
  const { product: name, price: cost } = product;
  acc.push({ name, cost });
  return acc;
}, []);
console.log('Modified Products:', modifiedProducts);
