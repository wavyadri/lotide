const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ Arrays Are Equal! ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑 Arrays Are NOT Equal ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2]); // false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true

module.exports = assertArraysEqual;
