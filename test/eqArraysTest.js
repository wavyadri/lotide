const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('eqArrays', () => {
  it('returns true for equality check of [] and []', () => {
    assert.deepEqual(eqArrays([], []), true);
  });

  it('returns true for equality check of [1,2,3] and [1,2,3', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('returns false for equality check of [1,1,3] and [1,2,3]', () => {
    assert.deepEqual(eqArrays([1, 1, 3], [1, 2, 3]), false);
  });
});
