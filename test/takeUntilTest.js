const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('takeUntil', () => {
  it('returns [1, 2, 5, 7, 2] for input ([1, 2, 5, 7, 2, -1, 2, 4, 5], (x) => x < 0)', () => {
    const results = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], (x) => x < 0);
    assert.deepEqual(results, [1, 2, 5, 7, 2]);
  });
});
