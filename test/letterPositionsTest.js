const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('letterPositions', () => {
  it('returns [0] for position of h in "hello"', () => {
    const results = letterPositions('hello')['h'];
    assert.deepEqual(results, [0]);
  });

  it("return [2,3] for position of l in 'hello'", () => {
    const results = letterPositions('hello')['l'];
    assert.deepEqual(results, [2, 3]);
  });
});
