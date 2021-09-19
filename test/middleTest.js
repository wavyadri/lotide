const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
assertArraysEqual(middle([1, 6]), []); // true should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // true should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // true should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4, 5]); // false should FAIL
