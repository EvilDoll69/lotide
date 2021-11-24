

// FUNCTION IMPLEMENTATION
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
  if (eqArrays(firstArr, secondArr)) return console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
};
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => Assertion Passed
assertArraysEqual(['1', '2', '3',], [1, 2]) // => Assertion Failed

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false);

const middle = function(arr) {
  let newArr = [];
  if (arr.length <= 2) { //amount of the arguments two or less
    newArr = [];
  } else if ((arr.length) % 2 !== 0) { // if the array has odd numbers of the arguments
    let middleIndex = (arr.length - 1) / 2; // -1 gives us an even numbers of the arguments
    newArr.push(arr[middleIndex]);
  } else { // even numbers
    let middleIndex1 = (arr.length - 2) / 2; //getting first middle argument
    let middleIndex2 = arr.length / 2; //getting second middle argument
    newArr = [arr[middleIndex1], arr[middleIndex2]];
    // newArr.push(arr[middleIndex1]);
    // newArr.push(arr[middleIndex2]);

  }
  return newArr; // return newArr is out of "if statement" to avoid repetition
} 
 console.log(middle([1,2]));
 console.log(middle([1,2, 3, 4, 5]));
 console.log(middle([1,2, 3, 4, 5, 6]));

