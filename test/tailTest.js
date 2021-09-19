const assert = require('chai').assert;

// const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe('#tail', () => {
  // test returned array elements
  it('returns 2 for result.length', () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs']);
    assert.strictEqual(result.length, 2);
  });

  it('returns Lighthouse for result[0]', () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs']);
    assert.strictEqual(result[0], 'Lighthouse');
  });

  it('returns [Lighthouse Labs] for [Hello Lighthouse Labs]', () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), [
      'Lighthouse',
      'Labs',
    ]);
  });

  // test original array
  it('returns 3 for words.length', () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    assert.strictEqual(words.length, 3);
  });

  // test one element
  it('returns 0 for one.length', () => {
    const one = tail(['One']);
    assert.strictEqual(one.length, 0);
  });

  // test empty array
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
});
