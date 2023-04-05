const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();
  const areKeysIdentical = eqArrays(keys1, keys2); // returns true or false

  if (!areKeysIdentical) {
    console.log("false");
    return false;
  }

  for (let k in object1) {

    if(Array.isArray(object1[k])) {

      if(!eqArrays(object1[k], object2[k])) {
        console.log("false");
        return false;
      }
      continue;
    }

    if (object1[k] !== object2[k]) {
      console.log("false");
      return false;
    }
  }

  console.log("true");
  return true;

};

const eqArrays = function(firstArr, secondArr) {

  if (firstArr.length !== secondArr.length) {
    return false;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) return false;
    }
  }
  return true;
};




const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  console.log(`Example label: ${inspect(actual)}`);
  
  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }

};