const flatten = (array) => {

  let flattenedArr = [];

  for (let each of array) {
    if (Array.isArray(each)) {
      for (let item of each) {
        flattenedArr.push(item);
      }
    } else {
      flattenedArr.push(each);
    }
  }
  return flattenedArr;
};

module.exports = flatten