const assert = require('chai').assert;
const map = require('../map');

describe('map', () => {
  it("returns ['h', 'a', 's'] for input (['happy', 'and', 'sad'], (word) => word[0]", () => {
    const results = map(['happy', 'and', 'sad'], (word) => word[0]);
    assert.deepEqual(results, ['h', 'a', 's']);
  });

  it('returns [] for input([], word => word[0]', () => {
    assert.deepEqual(
      map([], (word) => word[0]),
      []
    );
  });

  it("returns ['s', 's'] for input (['same', 'same'], (word) => word[0])", () => {
    const result = map(['same', 'same'], (word) => word[0]);
    assert.deepEqual(result, ['s', 's']);
  });
});
