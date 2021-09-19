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

// // Test Case 1: Check the returned array elements
// const result = tail(['Hello', 'Lighthouse', 'Labs']);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], 'Lighthouse'); // ensure first element is "Lighthouse"
// assertEqual(result[1], 'Labs'); // ensure second element is "Labs"

// // Test Case 2: Check the original array
// const words = ['Yo Yo', 'Lighthouse', 'Labs'];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case 3: One ele
// const one = tail(['One']);
// assertEqual(one.length, 0);

// // Test Case 4: Empty array
// const empty = tail([]);
// assertEqual(empty.length, 0);
