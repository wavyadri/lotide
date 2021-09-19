const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(eqArrays([1], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  ),
  false
); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
