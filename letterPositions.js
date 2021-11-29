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



const letterPositions = function(sentence) {
  const newObject = {};


  for (let i = 0; i < sentence.length; i++) { //gives a list of separate letters
    let character = sentence[i]; // take all indexes, string holding, push single letter
    
    if (character !== ' ') { //skiping empty spaces
      if (newObject[character]) { //checking if it has a value, it does not have the value, it is gonna be executed on a secon "L" in hello 
        //arrInObject = sentence.push(indexOf(i)); // creating new array of indexes
        newObject[character].push(i);             
      
    } else {
      
      newObject[character] = [i]; // i = index of the array/ adding a keys to the object
    }

    } 
  }
  return newObject;
}

console.log(letterPositions("hello"));
console.log(assertArraysEqual(letterPositions("hello").e, [1])); //a key in the object that your function returns
