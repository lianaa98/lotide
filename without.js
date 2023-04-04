const eqArrays = (firstArr, secondArr) => {

  if (firstArr.length !== secondArr.length) {
    return false;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) return false;
    }
  }
  return true;
};

const assertArraysEqual = (first, second) => {

  if (eqArrays(first, second)) {
    console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${first} !==  ${second}`);
  }
};

const without = (source, itemsToRemove) => {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    if (!toString(itemsToRemove[i])) {
      return newArr;
    } else if (itemsToRemove[i] !== source[i]) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
