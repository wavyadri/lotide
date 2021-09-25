const assert = require('chai').assert;
const flatten = require('../flatten');

describe('flatten', () => {
  it('returns [] for input []', () => {
    assert.deepEqual(flatten([]), []);
  });

  it('returns [1,2,3] for input [1,2,3]', () => {
    const results = flatten([1, 2, 3]);
    assert.deepEqual(results, [1, 2, 3]);
  });

  it('returns [1,2,3,4,5,6] for input [1, 2, [3, 4], 5, [6]]', () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
});
