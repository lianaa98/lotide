// { a: { y: 0, z: 1 },
//   b: 2,
//   c: { 
//        x: { d: 3, e: 4 } 
//      }
// } 

// { a: { z: 1 }, 
//   b: 2 }


const eqObjects = function(object1, object2) {

  // first layer of keys
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();
  const areKeysIdentical = eqArrays(keys1, keys2); // returns true or false

  console.log(keys1, keys2);

  // Base Case: no more objects in the values

  // keys are not identical => false
  if (!areKeysIdentical) {
    console.log("false");
    return false;
  }

  // keys are identical => compare values by keys => true/false
  
  for (let k in object1) {
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

const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
  
};

// Test codes

eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false



// if(Array.isArray(object1[k])) {

//   if(!eqArrays(object1[k], object2[k])) {
//     console.log("false");
//     return false;
//   }
//   continue;
// }