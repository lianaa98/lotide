const eqArrays = require('./eqArrays');

const assertArraysEqual = (first, second) => {
  if(eqArrays(first, second)) {
    console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${first} !==  ${second}`);
};

module.exports = assertArraysEqual;