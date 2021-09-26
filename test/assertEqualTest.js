const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
// TRUE
assertArraysEqual([], []);
assertArraysEqual([4, 2, 88], [4, 2, 88]);
assertArraysEqual(['hi', 2, 3], ['hi', 2, 3]);
assertArraysEqual([1], [1]);
assertArraysEqual([-1], [-1]);
// FALSE
assertArraysEqual([-1], [1]);
assertArraysEqual([1], []);
assertArraysEqual(['hello', 2, 3], ['Hello', 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
