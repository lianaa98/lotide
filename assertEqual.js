const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("i love icecream", "i love icecream");
assertEqual(3, 5);

module.exports = assertEqual;