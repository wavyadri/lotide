const eqArrays = (arr1, arr2) => {
  // check if arrays are equal in length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // check if array values are equal at the same index
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(eqArrays([1], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
