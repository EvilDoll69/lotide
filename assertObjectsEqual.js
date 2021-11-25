const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    } 
  } 
  return true;
  
};  

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) return (`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else return (`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

console.log(assertObjectsEqual({v:87, b:54}, {v:8, b:54}));

