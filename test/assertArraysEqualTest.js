const assertArraysEqual = require(`../assertArraysEqual`);
const eqArrays = require(`../eqArrays`);

console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4])); // => Assertion Passed
console.log(assertArraysEqual(['1', '2', '3',], [1, 2])) // => Assertion Failed