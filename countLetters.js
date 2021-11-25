// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const newObject = {};
  for (let i = 0; i < sentence.length; i++) { //gives a list of separate letters
    let word = sentence[i]; // take all indexes, string holding, push single letter
     
    if (word !== ' ') {               
      if (newObject[word]) {
        newObject[word] += 1;

      } else {
        newObject[word] = 1;
      }
      //console.log(i, newObject);
    }

    } return newObject;
  }
  
console.log(countLetters('lighthouse in the house'));