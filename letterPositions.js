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

module.exports = letterPositions