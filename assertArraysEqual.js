
const eqArrays = function(firstArr, secondArr) {
  // check if the array lengths are different
  if (firstArr.length !== secondArr.length) {
    return  false;
  } 
  // loop through elements in an array to each other
  for (let i = 0; i < firstArr.length; i++ ) {
    // check whether the two elements of the array are equal
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  } return true;
};



const assertArraysEqual = (firstArr, secondArr) => {
  if (eqArrays(firstArr, secondArr)) return console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
};
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => Assertion Passed
assertArraysEqual(['1', '2', '3',], [1, 2]) // => Assertion Failed
