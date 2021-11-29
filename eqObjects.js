const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    } 
  } 
  return true;
  
};  


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba))); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc))); // => false

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false