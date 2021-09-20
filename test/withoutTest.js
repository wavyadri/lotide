const assert = require('chai').assert;
const without = require('../without');

describe('without', () => {
  it('return [2,3] for input [1,2,3] and [1]', () => {
    const result = without([1, 2, 3], [1]);
    assert.deepEqual(result, [2, 3]);
  });

  it('returns ["1", "2"] for input of ["1", "2", "3"] and [1, 2, "3"]', () => {
    const result = without(['1', '2', '3'], [1, 2, '3']);
    assert.deepEqual(result, ['1', '2']);
  });

  it('returns ["hello", "world"] for input of ["hello", "world"] and []', () => {
    const result = without(['hello', 'world'], []);
    assert.deepEqual(result, ['hello', 'world']);
  });
});
