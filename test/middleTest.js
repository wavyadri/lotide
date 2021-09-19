const { assert } = require('chai');

// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe('#middle', () => {
  // pass in arr with <= 2 values
  it('returns [] for [1,6]', () => {
    assert.deepEqual(middle([1, 6]), []);
  });

  // odd length arr
  it('returns [2] for [1,2,3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  // same test as above, using expect
  // // if using expect, at beginning of doc use: const { expect } = require('chai')
  // it('returns [2] for [1,2,3]', () => {
  //   expect(middle([1, 2, 3])).to.deep.equal([2]);
  // });

  // even length arr
  it('returns [4,5] for [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });

  // odd length arr will not return two middle
  it('will not return [4,5] for [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.notDeepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4, 5]);
  });
});
