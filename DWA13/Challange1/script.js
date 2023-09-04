const provinces = [
  'Western Cape',
  'Gauteng',
  'Northern Cape',
  'Eastern Cape',
  'KwaZulu-Natal',
  'Free State',
];
const names = [
  'Ashwin',
  'Sibongile',
  'Jan-Hendrik',
  'Sifso',
  'Shailen',
  'Frikkie',
];

// Use forEach to console log each name to the console. You are allowed to call console.log seven times.

names.forEach((name) => {
  console.log(name);
});

// Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.

const uppercaseProvinces = provinces.map((provinces) =>
  provinces.toUpperCase()
);
console.log(uppercaseProvinces);

// Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 7, 7]

const characterCountArray = names.map(
  (name) => name.length
);
console.log(characterCountArray);

// Using toSorted to sort all provinces alphabetically.

const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3

const filteredProvinces = provinces.filter(
  (province) => !province.includes('Cape')
);
console.log(filteredProvinces);
// Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, true, false]

const hasSCharacterArray = names.map((name) =>
  name.split('').some((char) => char === 'S')
);
console.log(hasSCharacterArray);

// Using only reduce, turn the above into an object that indicates the province of an individual. In other words:

const provinceObject = names.reduce(
  (acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  },
  {}
);
console.log(provinceObject);
