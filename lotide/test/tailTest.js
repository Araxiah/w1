const assert = require('chai').assert;
const tail = require('../tail');


// const result = tail(["hi", "ahh", "cool"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "ahh");
// assertEqual(result[1], "cool");
describe('#tail', () => {
  it('returns "[ahh, cool]', () => {
    assert.deepEqual(tail(["hi", "ahh", "cool"]), ['ahh', 'cool']);
  });
});