const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = (arr) => {

  let newArr = [];

  if (arr.length <= 2) return newArr;

  if (arr.length % 2 !== 0) {
    let i = Math.floor(arr.length / 2);
    newArr.push(arr[i]);
    return newArr;
  }

  let a = Math.floor(arr.length / 2) - 1;
  let b = Math.floor(arr.length / 2);

  newArr.push(arr[a]);
  newArr.push(arr[b]);

  return newArr;
};

module.exports = middle;