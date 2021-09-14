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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ Arrays Are Equal! ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑 Arrays Are NOT Equal ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2]); // false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
