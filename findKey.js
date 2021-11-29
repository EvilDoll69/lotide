
const findKey = (object, callback) => {
  for (const key in object) {
      if (callback(object[key])) { 
        return key;
      }
  }
  return undefined;
}

// const findKey = (object, callback) => {  // scan the object and return the first key which contains the given value. 
//   //If no key with that given value is found, then it should return undefined.
//   return Object.keys(object).find(key => callback);
//   }



console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const test = "noma";
console.log(assertEqual(test, findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)));
