const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue', () => {
  it("returns drama as key for obj[key] = 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sci_fi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire',
    };
    let result = findKeyByValue(bestTVShowsByGenre, 'The Wire');
    assert.deepEqual(result, 'drama');
  });

  it("returns undefined as key for obj[key] = 'That 70s Show'", () => {
    const bestTVShowsByGenre = {
      sci_fi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire',
    };
    let result = findKeyByValue(bestTVShowsByGenre, 'That 70s Show');
    assert.deepEqual(result, undefined);
  });
});
