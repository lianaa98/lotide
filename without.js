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

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
