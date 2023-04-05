const letterPositions = function(sentence) {

  // sentence = string
  // join spaces
  const str = sentence.split(" ").join("");
  let results = {};

  for (let i = 0; i < str.length; i++) {
    results[str[i]] ? results[str[i]].push(i) : results[str[i]] = [i];
  }
  return results;
};

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

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);