const assert = require('chai').assert;
const findKey = require('../findKey');

describe('findKey', () => {
  it('returns "wednesday" for input object and callback', () => {
    const obj = {
      monday: { hours: 7 },
      tuesday: { hours: 7 },
      wednesday: { hours: 8 },
      thursday: { hours: 8 },
      friday: { hours: 8 },
      saturday: { hours: 4 },
    };
    const result = findKey(obj, (x) => x.hours === 8);
    assert.deepEqual(result, 'wednesday');
  });

  it("returns 'noma' for input object and callback", () => {
    const obj = {
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };
    const result = findKey(obj, (x) => x.stars === 2);
    assert.deepEqual(result, 'noma');
  });
});
