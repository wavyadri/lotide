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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TESTS
const words1 = ['happy', 'and', 'sad'];
const results1 = map(words1, (word) => word[0]);
assertArraysEqual(results1, ['h', 'a', 's']); // true

const words2 = [];
const results2 = map(words2, (word) => word[0]);
assertArraysEqual(results2, []); // true

const words3 = ['same', 'same'];
const results3 = map(words3, (word) => word[0]);
assertArraysEqual(results3, ['s', 's']); // true
