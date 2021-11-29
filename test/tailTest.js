 
// Test Case: Check the original array

// tail(words); // no need to capture the return value since we are not checking it
// console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!


// // Test Case 1: Check the returned array elements

// console.log(assertEqual(result.length, 2)); // ensure we get back two elements
// console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
// console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns '2' for ['Yo Yo', 'Lighthouse', 'Labs'] length", () => {
    assert.strictEqual(tail(words).length, 2);
  });

  it("returns '2' for the function result length", () => {
    assert.strictEqual(result.length, 2); 
  });
  it("returns 'Lighthouse' for the function result[0]", () => {
    assert.strictEqual(result[0], 'Lighthouse'); 
  });
});