const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) { // comparing the length of the arrays
    return  false;
  } 
  for (let i = 0; i < firstArr.length; i++ ) { //looping through them
    if (firstArr[i] !== secondArr[i]) { // comparing each element in the array
      return false;
    }
  } return true;
};

const assertArraysEqual = (firstArr, secondArr) => {
  if (eqArrays(firstArr, secondArr)) return (`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  else return (`🛑🛑🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
};

const results1 = map(words, word => word[0]);
console.log(results1); 

const expectedArray = ["g", "c", "t", "m", "t"]; // this array supposed to match a map function output;
console.log(assertArraysEqual(results1, expectedArray));

 