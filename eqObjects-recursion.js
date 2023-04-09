const eqObjects = function(object1, object2) {

  console.log("object1: ", object1);
  console.log("object2: ", object2);

  // if keys are not identical (length and values) => false

  const keys1 = Object.keys(object1).sort(); // => array of sorted keys
  const keys2 = Object.keys(object2).sort();
  const areKeysIdentical = eqArrays(keys1, keys2); // compare arrays
  console.log("keys1: ", keys1);
  console.log("keys2: ", keys2);


  if (!areKeysIdentical) {
    console.log("is this logged?");
    return false;
  } 

  for (let k of keys1) {

    console.log("object1[k] (b): ", object1[k], typeof object1[k]);
    console.log("object2[k] (b): ", object2[k], typeof object2[k]);

    // if object.key.value is NOT object => compare values => true/false
    if (typeof object1[k] !== "object") {
      if (object1[k] !== object2[k]) return "comparing values: " + false;  // if values are NOT equal => return false
      continue;                                                            // if values are equal => continue the loop
    }

    console.log("recursion now!!");
    return eqObjects(object1[k], object2[k]);  // JUMP out of everything if a single false gets returned!

  }
  return true;

};

const eqArrays = (firstArr, secondArr) => {

  if (firstArr.length !== secondArr.length) return false;

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) return false;
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


console.log(eqObjects({ a: 0, b: 1, c: 2, d: 3 }, { a: 0, b: 1, c: 2, d: 3 })) // => true
console.log("---");
console.log(eqObjects({ a: 0, b: 1, c: 2, d: 3 }, { a: 0, b: 1, c: 3, d: 3 })) // => false
console.log("---");
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log("---");
console.log(eqObjects({ a: 0, b: 1, d: 5, e: 6 }, { a: 0, c: 1, d: 5, e: 6 })); // => false
console.log("---");
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log("---");
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false