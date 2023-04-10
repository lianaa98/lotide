const tail = (array) => {
  let newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

module.exports = tail;
