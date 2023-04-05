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


const assertArraysEqual = (first, second) => {

  if (eqArrays(first, second)) {
    console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${first} !==  ${second}`);
  }
};

// Test assertions

assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);