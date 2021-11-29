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



module.exports = eqArrays;
