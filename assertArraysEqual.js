const eqArrays = require(`./eqArrays`)

const assertArraysEqual = (firstArr, secondArr) => {
  if (eqArrays(firstArr, secondArr)) return (`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  else return (`🛑🛑🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
};


module.exports = assertArraysEqual;