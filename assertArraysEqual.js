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

  if(eqArrays(first, second)) {
    console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${first} !==  ${second}`);
  }
};