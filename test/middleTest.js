
const eqArrays = require(`../eqArrays`);
const assertArraysEqual = require(`../assertArraysEqual`);
const middle = require(`../middle`);

console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4])); // => Assertion Passed
console.log(assertArraysEqual(['1', '2', '3',], [1, 2])); // => Assertion Failed

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false);


console.log(middle([1,2]));
console.log(middle([1,2, 3, 4, 5]));
console.log(middle([1,2, 3, 4, 5, 6]));