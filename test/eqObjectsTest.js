const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('eqObjects', () => {
  it("returns true for equality check of { a: '1', b: '2' } and { b: '2', a: '1' }", () => {
    const obj1 = { a: '1', b: '2' };
    const obj2 = { b: '2', a: '1' };
    assert.deepEqual(eqObjects(obj1, obj2), true);
  });

  it('returns true for equality check of { a: { z: { cat: 7 } }, b: 2 } and { a: { z: { cat: 7 } }, b: 2 }', () => {
    const obj1 = { a: { z: { cat: 7 } }, b: 2 };
    const obj2 = { a: { z: { cat: 7 } }, b: 2 };
    assert.deepEqual(eqObjects(obj1, obj2), true);
  });

  it('returns false for equality check of { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.deepEqual(eqObjects(obj1, obj2), false);
  });
});
