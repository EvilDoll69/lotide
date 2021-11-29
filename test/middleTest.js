
// const eqArrays = require(`../eqArrays`);
// const assertArraysEqual = require(`../assertArraysEqual`);
// const middle = require(`../middle`);

// console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4])); // => Assertion Passed
// console.log(assertArraysEqual(['1', '2', '3',], [1, 2])); // => Assertion Failed

// // TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false);


// console.log(middle([1,2]));
// console.log(middle([1,2, 3, 4, 5]));
// console.log(middle([1,2, 3, 4, 5, 6]));

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array if array contains two or less items", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns '3', middle number if number of items is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });
  it("returns '3, 4', two middle numbers in number of items is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
});