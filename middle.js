
// FUNCTION IMPLEMENTATION

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


module.exports = middle;
 

