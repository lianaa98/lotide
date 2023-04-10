const countLetters = function(sentence) {

  let str = sentence.split(" ").join("").toLowerCase();
  let results = {};

  for (let i of str) {
    if (results[i])  results[i] += 1;
    if (!results[i]) results[i] = 1;
  }

  return results;
};

module.exports = countLetters;