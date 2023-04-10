const assertEqual = require('./test/assertEqual');

const head = (array) => {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");