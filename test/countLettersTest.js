const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('countLetters', () => {
  it('returns 3 for a count in Adriana', () => {
    let result = countLetters('Adriana');
    assert.equal(result['a'], 3);
  });

  it('returns 1 for r count in Adriana', () => {
    let result = countLetters('Adriana');
    assert.equal(result['r'], 1);
  });

  it('returns undefined for z count in Adriana', () => {
    let result = countLetters('Adriana');
    assert.equal(result['z'], undefined);
  });
});
