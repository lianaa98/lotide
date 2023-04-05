// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// consider primitive values and arrays.

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

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }

};

// Test codes
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); 


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);



const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);