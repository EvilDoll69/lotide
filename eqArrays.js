// FUNCTION IMPLEMENTATION
const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return  false;
  } 
  for (let i = 0; i < firstArr.length; i++ ) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  } return true;
};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false);
