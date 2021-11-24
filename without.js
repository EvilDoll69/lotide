
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


const without = (source, itemsToRemove) => { 
  //should return a new array with only those elements from source that are not present in the itemsToRemove array
  const newArray = [];
  for (let i = 0; i < source.length; i++) { // looping through the array
    if (!itemsToRemove.includes(source[i])) { 
      newArray.push(source[i]) // pushing new array without the itemsToRemove
    }
  }
  return newArray;
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]))// => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));