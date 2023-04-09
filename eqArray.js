const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const eqArrays = (firstArr, secondArr) => {

  if (firstArr.length !== secondArr.length) return false;

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) return false;
  }

  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS