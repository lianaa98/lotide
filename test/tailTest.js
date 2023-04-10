const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] when passed ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const expected = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(words), expected);
  });
})

