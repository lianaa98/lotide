const takeUntil = function(array, callback) {

  const newResult = [];

  // array = data1
  // callback = function (x) { return x === ',' } --> return true/false

  for (let num of array) {
    if(callback(num)) break;
    newResult.push(num);
  }
  return newResult;
}

module.exports = takeUntil



// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);