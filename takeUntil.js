
const takeUntil = function(array, callback) {
  const newArray = [];
  for (const elem of array) {
    if (callback(elem)) {
    
    return newArray;  

    }  
    newArray.push(elem);  // push what is false for if statement
  }
  
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //check elements to some point
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

const testArray = [1, 2, 8, 7, 2 ];
console.log(assertArraysEqual(results1, testArray));

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]