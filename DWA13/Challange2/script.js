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
  'Exercise 1:',
  products.forEach((product) => {
    console.log(product.product);
  }),

  // Exercise 2: Use filter to filter out products that have a name longer than 5 characters.
  'Exercise 2:',
  products.filter((product) => product.product.length <= 5),

  // Exercise 3: Using both filter and map. Convert all prices that are strings to numbers,
  // and remove all products from the array that do not have prices.
  'Exercise 3:',
  products
    .filter((product) => product.price !== '' && !isNaN(Number(product.price)))
    .map((product) => ({
      ...product,
      price: Number(product.price),
    }))
    .reduce((acc, product) => acc + product.price, 0),

  // Exercise 4: Use reduce to concatenate all product names.
  'Exercise 4:',
  products.map((product) => product.product).reduce((acc, name) => `${acc}, ${name}`),

  // Exercise 5: Use reduce to calculate both the highest and lowest-priced items.
  'Exercise 5:',
  products.reduce(
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
  ),

  // Exercise 6: Using only Object.entries and reduce recreate the object with the exact same values,
  // with changed keys (product to name, price to cost).
  'Exercise 6:',
  products.reduce((acc, product) => {
    const { product: name, price: cost } = product;
    acc.push({ name, cost });
    return acc;
  }, [])
);
